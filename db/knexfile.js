require('dotenv').config({ path: '../.env' })

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_URL || 'postgres://postgres:postgres@localhost:5432/dogs_dev',
    migrations: {
      directory: './migrations',
    },
    seeds: { directory: './seeds' },
  },

  production: {
    client: 'pg',
    connection: process.env.DB_URL || 'postgres://postgres:postgres@localhost:5432/dogs_dev',
    migrations: {
      directory: './migrations',
    },
    seeds: { directory: './seeds' },
  },
}
