// Update with your config settings.

module.exports = {
  // Contiene datos de prueba para hacer todo tipo de experimentos
  development: {
    debug: true,
    client: 'postgresql',
    connection: {
      host: 'queenie.db.elephantsql.com',
      database: 'tkpjicfh',
      user: 'tkpjicfh',
      password: 'Kn3tB0QN5urQ1wDw5TNqw8izZfIlYYc5',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  // Contiene una copia exacta ( o tan exacta como se necesite, eg menos los datos sensible s)
  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  // los datos reales de tu negocio: los datos en produccion
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
