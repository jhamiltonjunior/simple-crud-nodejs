import { Pool } from 'pg';

const connectionString = {
  user: 'postgres',
  host: 'localhost',
  database: 'nauts',
  password: '0000',
  port: 5432,
};

const pool = new Pool(
  connectionString,
);

export default {
  query: (text, params) => pool.query(text, params),
};
