import prisma from '../utils/prisma.js';
import { generateScript } from './scriptGenerator.js';
import { generateAudio } from './audioService.js';
import { renderVideo } from './videoService.js';

export const startShortGeneration = async (shortId: string) => {
    const short = await prisma.short.findUnique({
        where: { id: shortId }
    });

    if (!short) throw new Error("Short not found");

    const render = await prisma.render.create({
        data: { shortId, status: "PROCESSING" }
    });

    try {
        // 1. Script
        const script = await generateScript(short.topic, short.language, short.duration, short.style);
        await prisma.short.update({
            where: { id: shortId },
            data: { script: script as any, status: "PROCESSING", title: script.title, description: script.description }
        });

        // 2. Audio
        const fullText = script.scenes.map((s: any) => s.text).join(" ");
        const audioPath = await generateAudio(fullText, short.voice || "alloy", shortId);

        // 3. Video
        const videoPath = await renderVideo(shortId, audioPath, script.scenes) as string;

        await prisma.short.update({
            where: { id: shortId },
            data: { status: "COMPLETED", videoPath }
        });

        await prisma.render.update({
            where: { id: render.id },
            data: { status: "COMPLETED" }
        });

    } catch (error: any) {
        console.error("Pipeline failed:", error);
        await prisma.short.update({
            where: { id: shortId },
            data: { status: "FAILED" }
        });
        await prisma.render.update({
            where: { id: render.id },
            data: { status: "FAILED", logs: error.message }
        });
    }
};
