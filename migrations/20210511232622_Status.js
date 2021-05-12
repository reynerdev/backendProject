exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('Status', (table) => {
    table.increments('StatusId').primary();
    table.string('Description', 50).notNullable();
  });
};

exports.down = function (knex) {};
