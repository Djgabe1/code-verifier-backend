import jwt from 'jsonwebtoken';
import {Response, Request,NextFunction } from 'express';

/**
 * @param {Request} req Original request previous middleware of verifivation JWT
 * @param {Response} res Response to be sent to the client
 * @param {NextFunction}next Next function to be executed
 * @returns Errors of the verification or the next middleware
  */
export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    // check HEADER from request for 'x-access-token'
    let token: any = req.headers['x-access-token'] /* || req.headers['authorization'] */;
    //Verify if jwt is present
    if (!token) {
        return res.status(403).send({
            authenticationError: 'Missing token',
            message: 'No token provided!'
        });
    }
    //Verify the token obtained
    jwt.verify(token, '', (err: any, decoded: any) => {
       if (err) {
            return res.status(500).send({
                authenticationError: 'Invalid token',
                message: 'Failed to verify JWT token in requesr!'
            });
        }
        // Pass something to the next middleware

        //Execute next middleware
        next();
    }
    );
}
