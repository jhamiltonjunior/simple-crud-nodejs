import postgresConfig from '../../config/postgres.js';
import Queue from '../lib/Queue.js';

const { query } = postgresConfig;

const getAuthor = (params) => params.rows[0].id_author;
const getPost = (params) => params.rows[0].id_post;

export default {
  async index(req, res) {
    try {
      const { quantity } = req.params;

      // DESC LIMIT 5

      const results = await query(
        `SELECT * FROM post
          ORDER BY id_post 
            DESC LIMIT 5
              OFFSET ${quantity};
        `,
      );

      res.json({ res: results.rows });
    } catch (err) {
      console.log(err);
    }
  },

  async unique(req, res) {
    try {
      const { url } = req.params;

      const post = await query(`SELECT * FROM post WHERE url = '${url}';`);

      const author = await query(
        `SELECT * FROM people WHERE id_people = ${getAuthor(post)}`,
      );

      const dialogue = await query(
        `SELECT * FROM dialogue WHERE id_post = ${getPost(post)}`,
      );

      const dialogueAuthor = await query(
        `SELECT * FROM people WHERE id_people = ${getAuthor(dialogue)}`,
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
        `INSERT INTO post (
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
        `UPDATE post
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

      await query(`DELETE FROM post WHERE id_post = ${id}`);

      res.json({ message: 'A postagem foi deletada' });
    } catch (err) {
      console.log(err);
    }
  },
};
