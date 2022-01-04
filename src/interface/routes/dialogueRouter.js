import { Router } from 'express';

import controler from '../controller/dialogueController.js';
import auth from '../middleware/authOnly.js';

const router = Router();

router.post('/post/:url/dialogue', auth.writer, controler.create);

export default (app) => app.use(router);
