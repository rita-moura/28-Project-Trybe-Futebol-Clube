import { Router } from 'express';
import MatchesController from '../controllers/MatchesController';
import tokenValidate from '../middlewares/tokenValidate';

const matchesRouter = Router();

matchesRouter
  .get('/', MatchesController.findAll)
  .patch('/:id/finish', tokenValidate, MatchesController.updateToFinish);

export default matchesRouter;
