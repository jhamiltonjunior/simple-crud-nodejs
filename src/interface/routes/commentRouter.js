import { Router } from 'express';

import controler from '../controller/commentController.js';
import auth from '../middleware/authOnly.js';

const router = Router();

router.post('/post/:url/comment', auth.writer, controler.create);

export default (app) => app.use(router);
