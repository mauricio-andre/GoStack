import { Router } from 'express';
import multer from 'multer';

import multerConfig from './config/multer';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';
import DeliverymanController from './app/controllers/DeliverymanController';
import DeliveryController from './app/controllers/DeliveryController';
import authMiddleware from './app/middlewares/auth';
import FileController from './app/controllers/FileController';
import DeliveryDeliverymanController from './app/controllers/DeliveryDeliverymanController';
import DeliveryTransportController from './app/controllers/DeliveryTransportController';
import DeliveryProblemController from './app/controllers/DeliveryProblemController';

const routes = new Router();
const uploads = multer(multerConfig);

routes.post('/sessions', SessionController.store);

routes.get('/deliveryman/deliveries', DeliveryDeliverymanController.index);
routes.get('/deliveryman/deliveries/:id', DeliveryDeliverymanController.show);
routes.post('/deliveryman/deliveries', DeliveryTransportController.store);
routes.put('/deliveryman/deliveries/:id', DeliveryTransportController.update);

routes.post('/delivery/:deliveryId/problems', DeliveryProblemController.store);

routes.use(authMiddleware);

routes.get('/recipients', RecipientController.index);
routes.get('/recipients/:id', RecipientController.show);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients/:id', RecipientController.update);
routes.delete('/recipients/:id', RecipientController.delete);

routes.get('/deliverymen', DeliverymanController.index);
routes.get('/deliverymen/:id', DeliverymanController.show);
routes.post('/deliverymen', DeliverymanController.store);
routes.put('/deliverymen/:id', DeliverymanController.update);
routes.delete('/deliverymen/:id', DeliverymanController.delete);

routes.get('/deliveries', DeliveryController.index);
routes.get('/deliveries/:id', DeliveryController.show);
routes.post('/deliveries', DeliveryController.store);
routes.put('/deliveries/:id', DeliveryController.update);
routes.delete('/deliveries/:id', DeliveryController.delete);

routes.get('/delivery/:deliveryId/problems', DeliveryProblemController.index);
routes.delete('/problem/:id/cancel-delivery', DeliveryProblemController.delete);

routes.post('/files', uploads.single('file'), FileController.store);

export default routes;
