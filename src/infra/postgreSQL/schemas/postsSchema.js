import client from '../../../config/postgres.js';

export default (command, item, from, table) => {
  client.query(`${command} ${item} ${from} ${table};`, (err, res) => {
    console.log(err, res);
    client.end();
  });
};
