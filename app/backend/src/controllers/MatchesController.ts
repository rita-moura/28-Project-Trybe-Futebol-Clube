import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

class MatchesController {
  public static async findAll(req: Request, res: Response) {
    const { inProgress } = req.query;

    const matches = await MatchesService.findAll(inProgress as string);

    res.status(200).json(matches);
  }

  public static async updateToFinish(req: Request, res: Response) {
    const { id } = req.params;
    await MatchesService.updateToFinish(id);

    res.status(200).json({ message: 'Finished' });
  }
}

export default MatchesController;
