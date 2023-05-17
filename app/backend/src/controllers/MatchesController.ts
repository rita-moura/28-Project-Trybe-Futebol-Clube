import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

class MatchesController {
  public static async findAll(_req: Request, res: Response) {
    const matches = await MatchesService.findAll();
    res.status(200).json(matches);
  }
}

export default MatchesController;
