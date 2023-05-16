import { Request, Response } from 'express';
import UsersService from '../services/UsersService';

class UsersController {
  public static async login(req: Request, res: Response) {
    const user = req.body;
    const token = await UsersService.login(user);

    res.status(200).json({ token });
  }
}

export default UsersController;
