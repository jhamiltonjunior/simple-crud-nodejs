import { Router } from 'express';

import posts from '../controllers/postsController.js';

const {
  index,
  unique,
  create,
  drop,
} = posts;

const router = Router();

router.get('/posts', index);

router.get('/posts/:url', unique);

router.post('/posts', create);

// router.put('/posts/:id');

router.delete('/posts/:id', drop);

export default (app) => app.use(router);
