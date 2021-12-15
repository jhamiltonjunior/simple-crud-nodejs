import postsConfig from '../../config/postgres.js';

const { query } = postsConfig;

export default {
  async index(req, res) {
    const results = await query('SELECT * FROM posts;');

    res.json({ res: results.rows });
  },

  async create(req, res) {
    const {
      id,
      title,
      body,
      author,
    } = req.body;

    const results = await query(`INSERT INTO posts (
      title, body, author, created_at
      ) VALUES (
        ${title}, ${body}, ${author}, ${new Date().now()}
      )`);

    res.json({ res: results.rows[id] });
  },
};
