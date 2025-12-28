import asyncHandler from 'express-async-handler';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

export const login = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body;

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET || 'secret', {
            expiresIn: '30d',
        });

        res.json({
            email,
            token,
        });
    } else {
        res.status(401);
        throw new Error('Invalid email or password');
    }
});

export const getMe = asyncHandler(async (req: any, res: Response) => {
    res.json({
        email: req.user.email,
    });
});
