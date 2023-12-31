import { Router } from 'express';
import MatchesController from '../controllers/MatchesController';
import tokenValidate from '../middlewares/tokenValidate';

const matchesRouter = Router();

matchesRouter
  .get('/', MatchesController.findAll)
  .post('/', tokenValidate, MatchesController.create)
  .patch('/:id/finish', tokenValidate, MatchesController.updateToFinish)
  .patch('/:id', tokenValidate, MatchesController.updateToGols);

export default matchesRouter;
