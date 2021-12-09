import connection from '../../infra/postgreSQL/schemas/postsSchema.js';

export default {
  async index(req, res) {
    const results = await connection('SELECT', '*', 'FROM', 'posts');

    res.json(results);
  },
  // async create(req, res) {
  //   const { title, body } = req.body;
  // },
};
