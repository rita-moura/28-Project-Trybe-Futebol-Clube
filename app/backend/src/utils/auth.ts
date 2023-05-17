import { sign, verify } from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'secretKey';

interface TokenId {
  id: number;
  message?: string;
}

export const generateToken = (id: number) => {
  const info = { id };
  const token = sign(
    info,
    secretKey,
    {
      expiresIn: '1m',
      algorithm: 'HS256',
    },
  );

  return token;
};

export const decodeToken = (token: string): TokenId => {
  const decode = verify(token, secretKey);
  return decode as TokenId;
};

export const isValidToken = (token: string): TokenId => {
  try {
    const validate = verify(token, secretKey);
    return validate as TokenId;
  } catch (error) {
    return { message: 'Token must be a valid token', id: 0 };
  }
};
