import postsConfig from '../../config/postgres.js';

const { query } = postsConfig;

export default {
  async index(req, res) {
    const results = await query('SELECT * FROM posts;');

    res.json({ res: results.rows });
  },

  async unique(req, res) {
    const { url } = req.params;

    console.log(url);

    const results = await query(`SELECT * FROM posts WHERE url_params = ${url};`);

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
        title, body, author
      ) VALUES (
        $1, $2, $3
      ) RETURNING *`,

      [title, body, author],
    );

    res.json({ res: results.rows });
  },
};
