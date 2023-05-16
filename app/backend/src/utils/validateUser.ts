import { Login } from '../services/UsersService';
import ValidadeError from './validateError';

const validate = ({ password, email }: Login): void => {
  const emailRegex = (/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i);
  const validateEmail = email.match(emailRegex);
  const validatePassword = password.length >= 6;

  if (!validateEmail || !validatePassword) {
    throw new ValidadeError(401, 'Email ou senha inválido');
  }
};

export default validate;
