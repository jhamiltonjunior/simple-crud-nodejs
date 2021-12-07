import { Router } from 'express';

import article from '../controllers/postsController.js';

const {
  saveArticle,
  getArticle,
} = article;

const router = Router();

router.get('/posts', getArticle);

// router.get('/posts/:id', getArticle);

router.post('/posts/:id', saveArticle);

router.put('/posts/:id');

router.delete('/posts/:id');

export default (app) => app.use(router);
