import { Client } from 'pg';

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'nauts',
  password: '0000',
  port: 5432,
});

client.connect();

export default client;
