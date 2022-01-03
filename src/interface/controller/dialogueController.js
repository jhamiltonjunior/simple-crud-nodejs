import postgresConfig from '../../config/postgres.js';

const { query } = postgresConfig;

const getId = (params) => params.rows[0].id_people;

export default {
  async create(req, res) {
    const {
      params: { url },
      client: { idPeople },
      body: { title, body },
    } = req;

    const post = await query(`SELECT * FROM post WHERE url = '${url}'`);

    const dialogue = await query(
      `INSERT INTO dialogue (id_author, title, body)
      VALUES ($1, $2, $3, $4)
      RETURNING *`,

      [getId(post), idPeople, title, body],
    );

    res.json({ res: dialogue.rows });
  },
};
