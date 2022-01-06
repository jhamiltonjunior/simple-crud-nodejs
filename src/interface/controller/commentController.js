import postgresConfig from '../../config/postgres.js';

const { query } = postgresConfig;

const getId = (params) => params.rows[0].post_id;

export default {
  async create(req, res) {
    try {
      const {
        params: { url },
        client: { idPeople },
        body: { title, body },
      } = req;

      const post = await query(`SELECT * FROM post_schema WHERE url = '${url}'`);

      const dialogue = await query(
        `INSERT INTO comment_schema (post_id, user_id, title, body)
        VALUES ($1, $2, $3, $4)
        RETURNING *`,

        [getId(post), idPeople, title, body],
      );

      res.json({ res: dialogue.rows });
    } catch (err) {
      console.log(err);
    }
  },
};
