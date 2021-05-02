// Our User Migration to create our tabel

exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('User', (table) => {
    //table.tipo_de_dato('nombre_de_columna).atributos_de_columna

    table.increments('UserId').primary();
    table.string('Name', 50).notNullable();
    table.string('LastName', 50).notNullable();
    table.date('Birthday').notNullable();
    table.string('Location', 50).notNullable();
    table.integer('Rating');
    table.boolean('Active').notNullable().defaultTo(true);
    table.integer('QuantityRequest');
    table.string('UserPassword', 250).notNullable();
    table.datetime('CreatedAt').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {};
