exports.up = function (knex) {
  return knex.schema.alterTable('UserSkill', (table) => {
    // we set at the beginning with a precision of 2 . that means only 2 digits icluding the decimal part
    // Here we're going to set that to the default option 8 precision and scale 2 .

    table.decimal('Price/hr').notNullable().alter();
    table.decimal('MinimunDownPayment').notNullable().alter();
  });
};

exports.down = function (knex) {};
