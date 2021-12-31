import 'dotenv/config';

import Queue from './interface/lib/Queue.js';

/*
  dentro do process eu coloco a função que vai
  lidar com o processo
  da aplicação
*/
Queue.process();

console.log('OK, queue');
