import client from '../../../config/postgres.js';

client.query('SELECT * FROM posts;', (err, res) => {
  console.log(err, res);
  client.end();
});

export default client;
