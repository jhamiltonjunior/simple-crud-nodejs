import 'dotenv/config';
import express, { json } from 'express';
import cors from 'cors';

import router from './interface/routes/index.js';

const app = express();

const port = 5000;

app.use(json());
app.use(express.urlencoded({ extended: true }));
// app.use(json({ type: 'application/vnd.api+json' }));

app.use(cors);
router(app);

app.listen(port, () => console.log('OK, app'));
