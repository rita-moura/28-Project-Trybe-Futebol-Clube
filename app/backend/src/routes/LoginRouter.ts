import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import validateUserLogin from '../middlewares/userValidate';
import tokenValidate from '../middlewares/tokenValidate';

const loginRouter = Router();

loginRouter
  .post('/', validateUserLogin, UsersController.login)
  .get('/role', tokenValidate, UsersController.findRole);

export default loginRouter;
