import asyncHandler from 'express-async-handler';
import prisma from '../utils/prisma.js';
import { startShortGeneration } from '../services/pipeline.js';
import { Request, Response } from 'express';

export const createShort = asyncHandler(async (req: Request, res: Response) => {
    const { topic, language, duration, style, voice, cta } = req.body;

    const short = await prisma.short.create({
        data: {
            topic,
            language,
            duration: parseInt(duration) || 60,
            style,
            voice,
            cta,
            status: 'PENDING',
        },
    });

    // Start generation in background
    startShortGeneration(short.id).catch(console.error);

    res.status(201).json(short);
});

export const getShorts = asyncHandler(async (req: Request, res: Response) => {
    const shorts = await prisma.short.findMany({
        orderBy: { createdAt: 'desc' },
    });
    res.json(shorts);
});

export const getShort = asyncHandler(async (req: Request, res: Response) => {
    const short = await prisma.short.findUnique({
        where: { id: req.params.id },
        include: { renders: true },
    });

    if (!short) {
        res.status(404);
        throw new Error('Short not found');
    }

    res.json(short);
});

export const deleteShort = asyncHandler(async (req: Request, res: Response) => {
    const short = await prisma.short.delete({
        where: { id: req.params.id },
    });
    res.json({ message: 'Short removed' });
});
