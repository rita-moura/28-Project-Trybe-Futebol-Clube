import { Router } from 'express';
import UsersController from '../controllers/UsersController';
import validateUserLogin from '../middlewares/userValidate';

const loginRouter = Router();

loginRouter
  .post('/', validateUserLogin, UsersController.login);

export default loginRouter;
