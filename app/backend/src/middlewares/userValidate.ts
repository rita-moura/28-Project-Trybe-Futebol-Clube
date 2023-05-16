import { NextFunction, Request, Response } from 'express';
import validate from '../utils/validateUser';

const validateUserLogin = (req: Request, res: Response, next: NextFunction) => {
  const login = req.body;

  if (!login.email || !login.password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  validate(login);

  next();
};

export default validateUserLogin;
