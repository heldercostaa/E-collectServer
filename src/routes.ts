import express from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import pointsController from './controllers/PointsController';
import itemsController from './controllers/ItemsController';

const routes = express.Router();
const upload = multer(multerConfig);

// index, show, create, update, delete

routes.get('/items', itemsController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

routes.post('/points', upload.single('image'), pointsController.create);

export default routes;