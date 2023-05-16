import { Request, Response } from 'express';
import TeamsService from '../services/TeamsService';

class TeamsController {
  public static async findAll(_req: Request, res: Response) {
    const teams = await TeamsService.findAll();
    res.status(200).json(teams);
  }

  public static async findById(req: Request, res: Response) {
    const { id } = req.params;

    const teamsById = await TeamsService.findById(+id);

    res.status(200).json(teamsById);
  }
}

export default TeamsController;
