exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('Request', (table) => {
    table.increments('RequestId').primary();
    table.integer('User_id').unsigned().references('User.UserId');
    table.integer('Client_id').unsigned().references('Client.ClientId');
    table.decimal('DownPayment', 2).default(0);
    table.string('Location', 50);
    table.integer('Status_Id').unsigned().references('Status.StatusId');
    table.datetime('ArrangeDate');
    table.datetime('CreatedAt').default(knex.fn.now());
  });
};

exports.down = function (knex) {};
