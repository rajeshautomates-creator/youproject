import ffmpeg from 'fluent-ffmpeg';
import path from 'path';
import fs from 'fs';

export const renderVideo = async (shortId: string, audioPath: string, scenes: any[]) => {
    return new Promise((resolve, reject) => {
        const dir = path.join(process.cwd(), 'temp', shortId);
        const outputPath = path.join(dir, 'final.mp4');

        // For now, let's use a placeholder image and repeat it, or use a black background.
        // In a real implementation, we would use visualPrompts to generate images or search for stock footage.
        // For simplicity, we'll create a 9:16 video with text overlays.

        const command = ffmpeg();

        // Placeholder: generate a 9:16 color background
        command
            .input('color=c=#020617:s=1080x1920:d=60')
            .inputFormat('lavfi')
            .input(audioPath)
            .outputOptions([
                '-c:v libx264',
                '-tune stillimage',
                '-c:a aac',
                '-b:a 192k',
                '-pix_fmt yuv420p',
                '-shortest'
            ]);

        // Add text filters for each scene
        // This is a complex part with FFmpeg filter_complex
        // For now, let's just do a simple burn-in of the first scene's text or a generic placeholder.

        const filters = scenes.map((scene, index) => {
            const startTime = scenes.slice(0, index).reduce((acc, s) => acc + s.duration, 0);
            return {
                filter: 'drawtext',
                options: {
                    text: scene.text,
                    fontsize: 48,
                    fontcolor: 'white',
                    x: '(w-text_w)/2',
                    y: '(h-text_h)/2',
                    enable: `between(t,${startTime},${startTime + scene.duration})`
                }
            };
        });

        command.videoFilters(filters);

        command
            .on('start', (commandLine) => {
                console.log('Spawned Ffmpeg with command: ' + commandLine);
            })
            .on('progress', (progress) => {
                console.log('Processing: ' + progress.percent + '% done');
            })
            .on('error', (err) => {
                console.error('An error occurred: ' + err.message);
                reject(err);
            })
            .on('end', () => {
                console.log('Processing finished !');
                resolve(outputPath);
            })
            .save(outputPath);
    });
};
