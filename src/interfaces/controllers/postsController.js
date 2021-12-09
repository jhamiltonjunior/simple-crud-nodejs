import postsSchema from '../../infra/postgreSQL/schemas/postsSchema.js';

const { index } = postsSchema;

export default {
  async index(req, res) {
    const results = await index('SELECT * FROM posts;');

    console.log(await index('SELECT * FROM posts;'));

    res.json({ res: results });
  },
};
