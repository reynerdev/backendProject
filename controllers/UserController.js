const { User } = require('../models');

const createUser = (req, res) => {
  // const newUser = req.body

  // creamos el objeto newUser para insertarlo en la base de datos

  const newUser = {};

  // return res.status(200).json({
  //   message: 'User created',
  // });
  // utilizando knex, insertar el objeto en la base datos
  // return;
  // responder lo que nos devuelve la base de datos

  return User.create(req.body)
    .then((resDB) => {
      return res.status(200).json({
        message: 'User created',
      });
    })
    .catch((err) => {
      if (err.code === '23505') {
        // Handling error from the database . Unique error. It's not allowed to enter repeated email.
        res.status(409).json({ message: 'Repeated User Email' });
        return;
      }
      res.status(400).json({ message: err });
    });
};

module.exports = {
  createUser,
};
