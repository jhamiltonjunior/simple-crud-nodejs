import 'dotenv/config';
import express, { json } from 'express';
import path from 'path';

import router from './interfaces/routes/index.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use(json());
app.use(express.static(path.resolve(__dirname, '..', 'static')));

router(app);

app.listen(5000, () => console.log('OK'));
