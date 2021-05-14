exports.up = function (knex) {
  return knex.schema.table('User', (table) => {
    table.string('UserEmail', 50).notNullable();
  });
};

exports.down = function (knex) {};
