import { Router } from 'express';

import controller from '../controllers/usersController.js';

const router = Router();

router.get('/users', controller.index);

router.get('/users/:username', controller.unique);

router.post('/users', controller.create);

export default (app) => app.use(router);
