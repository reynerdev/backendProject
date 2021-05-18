const knex = require('../config');
const createKnexModel = require('../utils/createKnexModel');
// //el bodyUser ya ha sido validado por nuestro controlador
// const create = (bodyUser) => {
//   //esto de aca nos devuelve una promesa. Pero se decide manejarlo a nivel de controlador
//   //   knex('User').insert(bodyRental);
// };

const TABLE = 'User';
const TABLE_COLUMNS = [
  'UserId',
  'Name',
  'LastName',
  'Birthday',
  'UserEmail',
  'Location',
  'Rating',
  'Active',
  'QuantityRequest',
  'UserPassword',
  'CreatedAt',
];
const TABLE_ID = 'UserId';

const User = createKnexModel(knex, TABLE, TABLE_COLUMNS, TABLE_ID);

User.findAllUserSkills = (idUser) => {
  return knex
    .select(
      'User.UserId',
      'User.Name',
      'User.LastName',
      'User.UserEmail',
      'Skill.SkillId',
      'Skill.Category',
      'Skill.SkillName',
      'UserSkill.Price/hr',
      'UserSkill.MinimunDownPayment'
    )
    .from('User')
    .join('UserSkill', 'UserSkill.User_id', '=', 'User.UserId')
    .join('Skill', 'Skill.SkillId', '=', 'UserSkill.Skill_id')
    .where({ 'User.UserId': idUser });
};

// We insert a row in the UserSkill many to many relationship table
User.addOneUserSkill = (idUser, body) => {
  console.log({ ...{ User_id: parseInt(idUser) }, ...body });
  return knex('UserSkill').insert({
    ...{ User_id: parseInt(idUser) },
    ...body,
  });
};

User.updateOneUserSkill = (idUser, idSkill, body) => {
  console.log(idUser, idSkill, body);
  return knex
    .update(body)
    .from('UserSkill')
    .where({ User_id: idUser, Skill_id: idSkill });
};

User.findOneUserSkill = (idUser, idSkill) => {
  return knex
    .select('*')
    .from('UserSkill')
    .where({ User_id: idUser, Skill_id: idSkill });
};

User.deleteOneUserSkill = (idUser, idSkill) => {
  return knex('UserSkill').where({ User_id: idUser, Skill_id: idSkill }).del();
};
module.exports = User;
