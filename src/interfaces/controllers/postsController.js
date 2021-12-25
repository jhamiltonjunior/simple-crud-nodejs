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

    const results = await query(`SELECT * FROM posts WHERE url_params = '${url}';`);

    res.json({ res: results.rows });
  },

  async create(req, res) {
    const {
      title,
      body,
      urlParams,
      author,
    } = req.body;

    const results = await query(
      `INSERT INTO posts (
        title, body, url_params, author
      ) VALUES (
        $1, $2, $3, $4
      ) RETURNING *`,

      [title, body, urlParams, author],
    );

    res.json({ res: results.rows });
  },

  async update(req, res) {
    const { url } = req.params;
    const {
      title,
      body,
      urlParams,
      author,
    } = req.body;

    const results = await query(
      `UPDATE posts
      SET
      title = $1,
      body = $2,
      url_params = $3,
      author = $4
      WHERE url_params = '${url}' RETURNING *`,
      [title, body, urlParams, author],
    );

    res.json({ res: results });
  },

  async drop(req, res) {
    const { id } = req.params;

    await query(`DELETE FROM posts WHERE id = ${id}`);

    res.json({ message: 'A postagem foi deletada' });
  },
};
