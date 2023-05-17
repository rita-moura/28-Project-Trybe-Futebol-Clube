import { compare } from 'bcryptjs';
import ValidadeError from '../utils/validateError';
import UsersModel from '../database/models/UsersModel';
import { decodeToken, generateToken } from '../utils/auth';

export type Login = {
  email: string;
  password: string;
};

class UsersService {
  public static async login({ email, password }: Login): Promise<string> {
    const user = await UsersModel.findOne({ where: { email } });
    if (!user) throw new ValidadeError(401, 'Invalid email or password');

    const verifyPassword = await compare(password, user.password);
    if (!verifyPassword) throw new ValidadeError(401, 'Invalid email or password');

    return generateToken(user.id);
  }

  public static async findRole(token: string) {
    const userId = decodeToken(token).id;
    const user = await UsersModel.findByPk(userId);

    if (!user) throw new ValidadeError(401, 'Token must be a valid token');

    return user.role;
  }
}

export default UsersService;
