import { Pool } from 'pg';

const connectionObject = {
  user: 'postgres',
  host: 'localhost',
  database: 'nauts',
  password: '0000',
  port: 5432,
};

const pool = new Pool(
  connectionObject,
);

export default {
  query: (text, params) => pool.query(text, params),
};
