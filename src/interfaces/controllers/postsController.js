import postsConfig from '../../config/postgres.js';

const { query } = postsConfig;

export default {
  async index(req, res) {
    const results = await query('SELECT * FROM posts;');

    res.json({ res: results.rows });
  },

  async unique(req, res) {
    const { id } = req.params;

    const results = query(`SELECT ${id} FROM posts;`);

    res.json({ res: results });
  },

  async create(req, res) {
    const {
      title,
      body,
      author,
    } = req.body;

    const results = await query(
      `INSERT INTO posts (
        title, body, author, created_at
      ) VALUES (
        $1, $2, $3, $4
      ) RETURNING *`,

      [title, body, author, '09/09/2022'],
    );

    res.json({ res: results.rows });
  },
};
