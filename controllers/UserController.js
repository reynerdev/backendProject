const { restart } = require('nodemon');
const { User, Client } = require('../models');

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
      res.status(200).json({
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

const findAll = async (req, res) => {
  try {
    const response = await User.findAll();

    res.status(200).json({
      message: 'Successfully obtained list of rentals',
      response,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error obtaining list of Users',
      error,
    });
  }
};

const findOneById = async (req, res) => {
  const { idUser } = req.params;

  try {
    const response = await User.findOneById(idUser);
    if (response.length === 0)
      return res.status(404).json({ message: "provided user doesn't exist" });
    res.status(200).json({
      message: 'Successfully obtained user by id',
      response,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error,
    });
  }
};

const updateOneById = async (req, res) => {
  const { idUser } = req.params;

  try {
    const response = await User.updateOneById(idUser, req.body);
    res.status(200).json({
      message: 'Succesfully updated user by Id',
      response,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error,
    });
  }
};

const deleteOneById = async (req, res) => {
  const { idUser } = req.params;

  try {
    await User.deleteOneById(idUser);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Its the user registreds?

    const [user] = await User.find({ email: email }, [
      'UserId',
      'Name',
      'LastName',
      'UserPassword',
    ]);

    if (!user) return res.status(400).json({ message: 'Invalid Credentials' });

    //3) Generar un JWT
  } catch (error) {
    res.status(500).send({ message: 'Server Error', error });
  }
};

const findAllUserSkill = async (req, res) => {
  const { idUser } = req.params;
  console.log('idUser', idUser);

  try {
    const resDB = await User.findAllUserSkills(idUser);

    res.status(200).json({
      message: 'Succesfully retrieve all the Skills from one User',
      resDB,
    });
  } catch (error) {
    res.status(500).send({ error });
  }
};

const addOneUserSkill = async (req, res) => {
  const { idUser } = req.params;
  const body = req.body;
  try {
    await User.addOneUserSkill(idUser, body);
  } catch (error) {
    res.status(500).send({ error });
  }
};
const updateOneUserSkill = async (req, res) => {
  const { idUser, idSkill } = req.params;
  const body = req.body;
  try {
    await User.updateOneUserSkill(idUser, idSkill, body);
  } catch (error) {
    res.status(500).send({ error });
  }
};
const findOneUserSkill = async (req, res) => {
  const { idUser, idSkill } = req.params;
  try {
    const resDb = await User.findOneUserSkill(idUser, idSkill);
    res
      .status(200)
      .json({ message: 'Succefully retrieve a Skill from one User' });
  } catch (error) {
    res.status(500).send({ error });
  }
};
const deleteOneUserSkill = async (req, res) => {
  const { idUser, idSkill } = req.params;
  try {
    const resDb = await User.deleteOneUserSkill(idUser, idSkill);
    res
      .status(200)
      .json({ message: 'Succefully DELETE a Skill from one User' });
  } catch (error) {
    res.status(500).send({ error });
  }
};

module.exports = {
  createUser,
  findAll,
  findOneById,
  updateOneById,
  deleteOneById,
  login,
  findAllUserSkill,
  addOneUserSkill,
  updateOneUserSkill,
  deleteOneUserSkill,
  findOneUserSkill,
};
