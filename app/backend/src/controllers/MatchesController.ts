import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

class MatchesController {
  public static async findAll(req: Request, res: Response) {
    const { inProgress } = req.query;

    const matches = await MatchesService.findAll(inProgress as string);

    res.status(200).json(matches);
  }
}

export default MatchesController;
