import { Router } from 'express';

import article from '../controllers/postsController.js';

const {
  index,
  create,
} = article;

const router = Router();

router.get('/posts', index);

// router.get('/posts/:id', index);

router.post('/posts/:id', create);

router.put('/posts/:id');

router.delete('/posts/:id');

export default (app) => app.use(router);
