exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('Skill', (table) => {
    table.increments('SkillId').primary();
    table.string('SkillName', 50).notNullable();
    table.string('Category', 50).notNullable();
  });
};

exports.down = function (knex) {};
