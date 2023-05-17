import { Router } from 'express';
import MatchesController from '../controllers/MatchesController';

const matchesRouter = Router();

matchesRouter
  .get('/', MatchesController.findAll);

export default matchesRouter;
