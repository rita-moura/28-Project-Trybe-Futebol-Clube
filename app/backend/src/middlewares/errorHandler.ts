import { NextFunction, Request, Response } from 'express';
import ValidadeError from '../utils/validateError';

export default function errorHandler(
  erro: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const { status, message } = erro as ValidadeError;
  res.status(status || 500).json({ message });
}
