exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('Client', (table) => {
    table.increments('ClientId').primary();
    table.string('ClientName', 50).notNullable();
    table.string('ClientLastName', 50).notNullable();
    table.string('ClientPassword', 50).notNullable();
    table.string('ClientEmail', 50).notNullable();
    table.decimal('Rating', 2).default(0);
    table.decimal('Spent', 2).default(0);
    table.datetime('CreatedAt').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {};
