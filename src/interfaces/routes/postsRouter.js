import { Router } from 'express';

import posts from '../controllers/postsController.js';

const {
  index,
  create,
} = posts;

const router = Router();

router.get('/posts', index);

// router.get('/posts/:id', index);

// router.post('/posts', create);

// router.put('/posts/:id');

// router.delete('/posts/:id');

export default (app) => app.use(router);
