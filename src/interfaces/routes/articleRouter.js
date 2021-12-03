import { Router } from 'express';

import article from '../controllers/articleController.js';
// import authWriterOnly from '../middlewares/authWriterOnly.js';

const { saveArticle } = article;

const router = Router();

router.get('/', saveArticle);
router.post('/', (req, res) => {
  const { newArticle } = req.body;

  console.log(newArticle);

  res.json({ newArticle });
});

export default (app) => app.use(router);
