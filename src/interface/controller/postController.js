import postgresConfig from '../../config/postgres.js';
import Queue from '../lib/Queue.js';

const { query } = postgresConfig;

const getAuthor = (params) => params.rows[0].user_id;
const getPost = (params) => params.rows[0].post_id;

export default {
  async index(req, res) {
    try {
      const { quantity } = req.params;

      const results = await query(`
        SELECT * FROM post_schema ORDER BY post_id
        DESC LIMIT 5 OFFSET ${quantity};
      `);

      res.json({ res: results.rows });
    } catch (err) {
      console.log(err);
    }
  },

  async unique(req, res) {
    try {
      const { url } = req.params;

      const post = await query(`SELECT * FROM post_schema WHERE url = '${url}';`);

      const author = await query(
        `SELECT * FROM user_schema WHERE user_id = ${getAuthor(post)}`,
      );

      const dialogue = await query(
        `SELECT * FROM comment_schema WHERE post_id = ${getPost(post)}`,
      );

      const dialogueAuthor = await query(
        `SELECT * FROM user_schema WHERE user_id = ${getAuthor(dialogue)}`,
      );

      res.json({
        post: post.rows,
        author: author.rows,
        comment: dialogue.rows,
        authorComment: dialogueAuthor.rows,
      });
    } catch (err) {
      console.log(err);
    }
  },

  async create(req, res) {
    try {
      const {
        title,
        body,
        urlParams,
      } = req.body;

      const { client: { idPeople } } = req;

      const results = await query(
        `INSERT INTO post_schema (
        title, body, url, id_author
      ) VALUES (
        $1, $2, $3, $4
      ) RETURNING *`,

        [
          title,
          body,
          urlParams,
          idPeople,
        ],
      );

      res.json({ res: results.rows });
    } catch (err) {
      console.log(err);
    }
  },

  async update(req, res) {
    try {
      const { url } = req.params;
      const {
        title,
        body,
        urlParams,
        author,
      } = req.body;

      const results = await query(
        `UPDATE post_schema
      SET
      title = $1,
      body = $2,
      url = $3,
      id_author = $4
      WHERE url = '${url}' RETURNING *`,
        [title, body, urlParams, author],
      );

      Queue.add('UpdatePost', { results });

      res.json({ res: results });
    } catch (err) {
      console.log(err);
    }
  },

  async delete(req, res) {
    try {
      const { id } = req.params;

      await query(`DELETE FROM post_schema WHERE post_id = ${id}`);

      res.json({ message: 'A postagem foi deletada' });
    } catch (err) {
      console.log(err);
    }
  },
};
