import postgres from '../../../config/postgres.js';

const { query } = postgres;

export default {
  async index(text, params) {
    const rows = await query(text, params)
      .then((results) => results.rows);

    return rows;
  },
};
