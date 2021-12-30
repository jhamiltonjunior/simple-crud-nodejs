import { Router } from 'express';

import controller from '../controllers/postsController.js';

const router = Router();

router.get('/posts', controller.index);

router.get('/posts/:url', controller.unique);

router.post('/posts', controller.create);

router.put('/posts/edit/:url', controller.update);

router.delete('/posts/:id', controller.drop);

export default (app) => app.use(router);
