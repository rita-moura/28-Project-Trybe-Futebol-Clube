import { compare } from 'bcryptjs';
import ValidadeError from '../utils/validateError';
import UsersModel from '../database/models/UsersModel';
import generateToken from '../utils/auth';

export type Login = {
  email: string;
  password: string;
};

class UsersService {
  public static async login({ email, password }: Login): Promise<string> {
    const user = await UsersModel.findOne({ where: { email } });
    if (!user) throw new ValidadeError(401, 'Email ou senha inválido');

    const verifyPssword = await compare(password, user.password);
    if (!verifyPssword) throw new ValidadeError(401, 'Email ou senha inválido');

    return generateToken(user.id);
  }
}

export default UsersService;
