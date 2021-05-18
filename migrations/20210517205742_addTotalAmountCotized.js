exports.up = function (knex) {
  return knex.schema.alterTable('Request', (table) => {
    table.decimal('DownPayment').default(0).alter();
    table.decimal('TotalValued').alter();
  });
};

exports.down = function (knex) {};
