import { Router } from 'express';

import controller from '../controller/postController.js';
import auth from '../middleware/authOnly.js';

const router = Router();

router.get('/post/pages=:quantity', controller.index);

router.get('/post/:url', controller.unique);

router.post('/post', auth.writer, controller.create);

router.put('/post/edit/:url', controller.update);

router.delete('/post/:id', controller.delete);

export default (app) => app.use(router);
