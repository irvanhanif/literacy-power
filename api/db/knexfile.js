// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
require('dotenv').config({path: '../../.env'});

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      host: process.env.HOST_DB,
      port: process.env.PORT_DB,
      user: process.env.USER_DB,
      password: process.env.PW_DB,
      database: process.env.DB_NAME,      
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
