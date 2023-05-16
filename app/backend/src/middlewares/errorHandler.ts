import { NextFunction, Request, Response } from 'express';
import ValidadeError from '../utils/validateError';

export default function errorHandler(
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  const { status, message } = err as ValidadeError;
  res.status(status || 500).json({ message });
}
