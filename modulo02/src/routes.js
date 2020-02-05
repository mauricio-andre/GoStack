import { Router } from 'express';
import User from './app/models/User';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Mauricio',
//     email: 'mauricio@teste.com',
//     passwordHash: '123456789',
//   });
//   res.json(user);
// });

export default routes;
