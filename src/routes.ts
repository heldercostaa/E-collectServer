import express from 'express';

import pointsController from './controllers/PointsController';
import itemsController from './controllers/ItemsController';

const routes = express.Router();

// index, show, create, update, delete

routes.get('/items', itemsController.index);
routes.post('/points', pointsController.create);

export default routes;