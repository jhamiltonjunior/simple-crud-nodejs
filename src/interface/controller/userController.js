import postgresConfig from '../../config/postgres.js';
import generateToken from './util/generateToken.js';

const { query } = postgresConfig;

const getId = (params) => params.rows[0].user_id;

export default {
  async index(_, res) {
    try {
      const results = await query('SELECT * FROM user_schema;');

      res.json({ res: results.rows });
    } catch (err) {
      console.log(err);
    }
  },

  async unique(req, res) {
    try {
      const { username } = req.params;

      const results = await query(`SELECT * FROM user_schema WHERE username = '${username}';`);

      res.json({ res: results.rows });
    } catch (err) {
      console.log(err);
    }
  },

  async create(req, res) {
    try {
      const {
        username,
        fullname,
        email,
        passwd,
      } = req.body;

      // if (!username) {
      //   res.json({ message: 'erro no seu username!' });
      // }

      // if (!fullname) {
      //   res.json({ message: 'erro no seu name!' });
      // }

      // if (!email) {
      //   res.json({ message: 'erro no seu email!' });
      // }

      // if (!passwd) {
      //   res.json({ message: 'erro no seu password!' });
      // }

      const results = await query(
        `INSERT INTO user_schema (
          username, fullname, email, passwd
        )
        VALUES ($1, $2, $3, $4) RETURNING *`,
        [
          username,
          fullname,
          email,
          passwd,
        ],
      );

      res.json({
        res: results.rows,
        token: generateToken({ id: getId(results) }),
      });
    } catch (err) {
      console.log(err);
    }
  },
};
