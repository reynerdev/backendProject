const knex = require('../config');
const createKnexModel = require('../utils/createKnexModel');
// //el bodyUser ya ha sido validado por nuestro controlador
// const create = (bodyUser) => {
//   //esto de aca nos devuelve una promesa. Pero se decide manejarlo a nivel de controlador
//   //   knex('User').insert(bodyRental);
// };

const TABLE = 'users';
const TABLE_COLUMNS = ['user_id'];
const TABLE_ID = 'user_id';

const User = createKnexModel(knex, TABLE, TABLE_COLUMNS, TABLE_ID);

module.exports = User;
