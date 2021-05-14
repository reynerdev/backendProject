exports.up = function (knex) {
  return knex.schema.alterTable('User', (table) => {
    table.string('Location', 50).notNullable().default('0.0').alter();
  });
};

exports.down = function (knex) {};
