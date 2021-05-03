const knex = require('../config');

const create = (bodyClient) => {
  //esto de aca nos devuelve una promesa. Pero se decide manejarlo a nivel de controlador
  //   knex('User').insert(bodyRental);
};

module.exports = {
  create,
};
