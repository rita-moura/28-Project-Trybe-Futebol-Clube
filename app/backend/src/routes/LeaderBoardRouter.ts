import { Router } from 'express';
import MatchesController from '../controllers/MatchesController';

const leaderBoardRouter = Router();

leaderBoardRouter
  .get('/', MatchesController.leaderBoard)
  .get('/home', MatchesController.leaderBoard)
  .get('/away', MatchesController.leaderBoard);

export default leaderBoardRouter;
