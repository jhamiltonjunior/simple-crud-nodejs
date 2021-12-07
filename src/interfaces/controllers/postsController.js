import knex from '../../config/postgreSQL.js';

export default {
  async saveArticle(req, res) {
    res.json({
      id: 1,
      title: 'Meu segundo REST com postgreSQL',
      body: 'NaN',
      date: new Date(),
    });
  },

  async getArticle(req, res) {
    knex('posts').then((results) => res.json(results));
  },
};
