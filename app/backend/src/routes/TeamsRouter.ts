import { Router } from 'express';
import TeamsController from '../controllers/TeamsController';

const teamsRouter = Router();

teamsRouter
  .get('/', TeamsController.findAll)
  .get('/:id', TeamsController.findById);

export default teamsRouter;
