import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { CustomRequest } from '../types/customTypes';
import { Secret } from 'jsonwebtoken';


const isAuthenticated = (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.header('x-auth-token');
        if (!token) return res.status(403).send('Access denied.');

        const privateKey: Secret = process.env.JWTPRIVATEKEY as Secret;

        const decoded = jwt.verify(token, privateKey) as unknown as { id: string, user: string };
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send('Invalid token');
    }
};

export default isAuthenticated;