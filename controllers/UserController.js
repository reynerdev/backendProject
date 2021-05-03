const { User, Skill, Client } = require('../models');

const createUser = (req, res) => {
  // const newUser = req.body

  // creamos el objeto newUser para insertarlo en la base de datos

  const newUser = {};

  return res.status(200).json({
    message: 'User created',
  });
  // utilizando knex, insertar el objeto en la base datos
  // return;
  // responder lo que nos devuelve la base de datos
};

module.exports = {
  createUser,
};
