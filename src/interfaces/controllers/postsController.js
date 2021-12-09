import knex from '../../config/postgreSQL.js';

export default {
  async index(req, res) {
    const results = await knex('posts');

    res.json(results);
  },
  async create(req, res) {
    const { title, body } = req.body;
  },
};
