exports.up = function (knex) {
  return knex.schema.alterTable('User', (table) => {
    table.decimal('Rating', 2).default(0).alter();
  });
};

exports.down = function (knex) {};
