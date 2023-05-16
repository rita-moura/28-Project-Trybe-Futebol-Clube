import { sign } from 'jsonwebtoken';

const secretKey = process.env.JWT_SECRET || 'secretKey';

const generateToken = (id: number) => {
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

export default generateToken;
