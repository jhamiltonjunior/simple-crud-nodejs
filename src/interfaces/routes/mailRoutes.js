import { Router } from 'express';

import sendMail from '../controllers/mailController.js';

const router = Router();
const { store } = sendMail;

router.post('/mail', store);

export default (app) => app.use(router);
