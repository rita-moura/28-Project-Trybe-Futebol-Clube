import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

class MatchesController {
  public static async findAll(req: Request, res: Response) {
    const { inProgress } = req.query;

    const matches = await MatchesService.findAll(inProgress as string);

    res.status(200).json(matches);
  }

  public static async create(req: Request, res: Response) {
    const match = req.body;

    const newMatch = await MatchesService.create(match);

    res.status(201).json(newMatch);
  }

  public static async updateToFinish(req: Request, res: Response) {
    const { id } = req.params;
    await MatchesService.updateToFinish(id);

    res.status(200).json({ message: 'Finished' });
  }

  public static async updateToGols(req: Request, res: Response) {
    const { id } = req.params;
    const match = req.body;
    await MatchesService.updateToGoals(match, id);

    res.status(200).json({ message: 'Update' });
  }
}

export default MatchesController;
