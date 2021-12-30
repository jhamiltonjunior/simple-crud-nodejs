import postgresConfig from '../../config/postgres.js';

const { query } = postgresConfig;

export default {
  async index(req, res) {
    const results = await query('SELECT * FROM users;');

    res.json({ res: results.rows });
  },

  async unique(req, res) {
    const { username } = req.params;

    // console.log(username);

    const results = await query(`SELECT * FROM users WHERE username = '${username}';`);

    res.json({ res: results.rows });
  },

  async create(req, res) {
    const {
      username,
      name,
      email,
      password,
    } = req.body;

    if (!username) {
      res.json({ message: 'erro no seu username!' });
    }

    if (!name) {
      res.json({ message: 'erro no seu name!' });
    }

    if (!email) {
      res.json({ message: 'erro no seu email!' });
    }

    if (!password) {
      res.json({ message: 'erro no seu password!' });
    }

    const results = await query(
      `INSERT INTO users (
      username, name, email, password
      )
      VALUES ($1, $2, $3, $4)`,
      [
        username,
        name,
        email,
        password,
      ],
    );

    res.json({ res: results.rows });
  },
};
