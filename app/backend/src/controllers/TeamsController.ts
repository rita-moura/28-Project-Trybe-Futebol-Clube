import { Request, Response } from 'express';
import TeamsService from '../services/TeamsService';

class TeamsController {
  public static async findAll(_req: Request, res: Response) {
    const teams = await TeamsService.findAll();
    res.status(200).json(teams);
  }
}

export default TeamsController;
