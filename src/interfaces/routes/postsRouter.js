import { Router } from 'express';

import article from '../controllers/postsController.js';

const { saveArticle } = article;

const router = Router();

router.get('/posts', saveArticle);

router.get('/posts/:id', saveArticle);

router.post('/posts/:id');

router.put('/posts/:id');

router.delete('/posts/:id');

export default (app) => app.use(router);
