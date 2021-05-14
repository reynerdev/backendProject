exports.up = function (knex) {
  return knex.schema.alterTable('User', (table) => {
    table.unique('UserEmail');
  });
};

exports.down = function (knex) {};
