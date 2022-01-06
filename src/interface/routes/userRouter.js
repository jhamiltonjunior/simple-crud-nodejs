import { Router } from 'express';

import controller from '../controller/userController.js';

const router = Router();

router.get('/user', controller.index);

router.get('/user/:username', controller.unique);

router.post('/user', controller.create);

export default (app) => app.use(router);
