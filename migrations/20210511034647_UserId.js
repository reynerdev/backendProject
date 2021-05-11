exports.up = function (knex) {
  return knex.schema.createTableIfNotExists('UserSkill', (table) => {
    //User.UserId add a references to the table User and teh column UserId
    table.integer('User_id').unsigned().references('User.UserId');
    table.integer('Skill_id').unsigned().references('Skill.SkillId');
    table.decimal('Price/hr', 2).notNullable();
    table.decimal('MinimunDownPayment', 2).notNullable();
    table.boolean('Available').notNullable().default(true);

    table.primary(['User_id', 'Skill_id']);
  });
};

exports.down = function (knex) {};
