exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('ReviewUserFromClient', (table) => {
    table.increments('ReviewId').primary();
    table.integer('Request_id').unsigned().references('Request.RequestId');
    table.integer('User_id').unsigned().references('User.UserId');
    table.integer('Client_id').unsigned().references('Client.ClientId');
    table.string('Review', 50).notNullable();
    table.unique(['ReviewId', 'Request_id']);
  });
};

exports.down = function (knex) {};
