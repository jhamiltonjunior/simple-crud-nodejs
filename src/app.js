import 'dotenv/config';
import express, { json } from 'express';

import router from './interfaces/routes/index.js';

const app = express();

app.use(json());
app.use(express.urlencoded({ extended: true }));
app.use(json({ type: 'application/vnd.api+json' }));

router(app);

app.listen(5000, () => console.log('OK, app'));
