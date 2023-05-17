import { Request, Response } from 'express';
import UsersService from '../services/UsersService';

class UsersController {
  public static async login(req: Request, res: Response) {
    const user = req.body;
    const token = await UsersService.login(user);

    res.status(200).json({ token });
  }

  public static async findRole(req: Request, res: Response) {
    const token = req.headers.authorization as string;
    const role = await UsersService.findRole(token);

    res.status(200).json({ role });
  }
}

export default UsersController;
