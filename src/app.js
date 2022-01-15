import 'dotenv/config';
import express, { json } from 'express';
import path from 'path';

import router from './interface/routes/index.js';

const app = express();

app.use(json());
app.use(express.urlencoded({ extended: true }));
// app.use(json({ type: 'application/vnd.api+json' }));

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'view'));

app.use(express.static(path.resolve(__dirname, '..', 'static')));

router(app);

app.listen(5000, () => console.log('OK, app'));
