require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directiory: './knex_migrations',
    },
    seeds: { directiory: './db/seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directiory: './knex_migrations',
    },
    seeds: { directiory: './db/seeds' },
  },
}
