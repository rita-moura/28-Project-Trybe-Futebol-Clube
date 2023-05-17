import { NextFunction, Request, Response } from 'express';
import { isValidToken } from '../utils/auth';

const tokenValidate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const validate = isValidToken(token);

  if (validate.message) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  next();
};

export default tokenValidate;
