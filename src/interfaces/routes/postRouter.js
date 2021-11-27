import { Router } from 'express';

// import authWriterOnly from '../middlewares/authWriterOnly.js';

const router = Router();

router.get('/', (req, res) => {
  res.render('CKEditor');
});

export default (app) => app.use(router);
