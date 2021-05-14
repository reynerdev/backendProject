const knex = require('../config');
const createKnexModel = require('../utils/createKnexModel');
// //el bodyUser ya ha sido validado por nuestro controlador
// const create = (bodyUser) => {
//   //esto de aca nos devuelve una promesa. Pero se decide manejarlo a nivel de controlador
//   //   knex('User').insert(bodyRental);
// };

const TABLE = 'User';
const TABLE_COLUMNS = ['UserId'];
const TABLE_ID = 'UserId';

const User = createKnexModel(knex, TABLE, TABLE_COLUMNS, TABLE_ID);

module.exports = User;
