import axios from 'axios';
import fs from 'fs';
import path from 'path';

export const generateAudio = async (text: string, voiceId: string, shortId: string) => {
    const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
    if (!ELEVENLABS_API_KEY) throw new Error("ELEVENLABS_API_KEY is missing");

    // Default voice if none provided (e.g., Bella)
    const voice = voiceId || '21m00Tcm4TbcDqjt8kn1';

    const response = await axios({
        method: 'post',
        url: `https://api.elevenlabs.io/v1/text-to-speech/${voice}`,
        data: {
            text,
            model_id: 'eleven_monolingual_v1',
            voice_settings: {
                stability: 0.5,
                similarity_boost: 0.5,
            },
        },
        headers: {
            'Accept': 'audio/mpeg',
            'xi-api-key': ELEVENLABS_API_KEY,
            'Content-Type': 'application/json',
        },
        responseType: 'arraybuffer',
    });

    const dir = path.join(process.cwd(), 'temp', shortId);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

    const filePath = path.join(dir, 'audio.mp3');
    await fs.promises.writeFile(filePath, Buffer.from(response.data));

    return filePath;
};
