import { Router } from 'express';

import controller from '../controller/page/homeController.js';

const router = Router();

router.get('/', controller.index);

export default (app) => app.use(router);
