import { Router } from 'express';

import posts from '../controllers/postsController.js';

const {
  index,
  unique,
  create,
  update,
  drop,
} = posts;

const router = Router();

router.get('/posts', index);

router.get('/posts/:url', unique);

router.post('/posts', create);

router.put('/posts/edit/:url', update);

router.delete('/posts/:id', drop);

export default (app) => app.use(router);
