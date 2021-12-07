// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: 'knex_test',
      user: 'postgres',
      password: '0000',
    },
    migrations: {
      tableName: 'posts_migrations',
      directory: `${__dirname}/src/infra/postgreSQL/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/infra/postgreSQL/seeds`,
    },
  },

};
