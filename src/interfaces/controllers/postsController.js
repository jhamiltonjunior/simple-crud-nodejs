import pg from '../../infra/postgreSQL/schemas/postsSchema.js';

export default {
  async index(req, res) {
    const results = await pg();

    res.json(results);
  },
  // async create(req, res) {
  //   const { title, body } = req.body;
  // },
};
