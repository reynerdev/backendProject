// const knex = require('../config');

//el bodyUser ya ha sido validado por nuestro controlador
const create = (bodyUser) => {
  //esto de aca nos devuelve una promesa. Pero se decide manejarlo a nivel de controlador
  //   knex('User').insert(bodyRental);
};

module.exports = {
  create,
};
