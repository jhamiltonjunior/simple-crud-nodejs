import { Router } from 'express';

import controler from '../controller/dialogueController.js';

const router = Router();

router.get('/post/:url/dialogue', controler.create);
