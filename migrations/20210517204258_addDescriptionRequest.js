exports.up = function (knex) {
  return knex.schema.alterTable('Request', (table) => {
    table.string('Description', 200);
  });
};

exports.down = function (knex) {};
