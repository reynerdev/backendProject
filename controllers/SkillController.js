const { Skill } = require('../models');

const createSkill = async (req, res) => {
  try {
    console.log(req.body);
    const resDB = await Skill.create(req.body);
    console.log(resDB);
    res.status(200).json({
      message: 'Skill created',
    });
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

const findAll = async (req, res) => {
  try {
    const resDB = await Skill.findAllNoActiveOption();

    return res.status(200).json({
      message: 'Successfully obtained list of Skills',
      resDB,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error obtaining list of Skills',
      error,
    });
  }
};

const findOneById = async (req, res) => {
  const { idSkill } = req.params;

  try {
    const response = await Skill.findOneById(idSkill);
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
  const { idSkill } = req.params;

  try {
    const response = await Skill.updateOneById(idSkill, req.body);
    res.status(200).json({
      message: 'Succesfully updated Skill by Id',
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
  const { idSkill } = req.params;

  try {
    await User.deleteOneById(idSkill);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error,
    });
  }
};

module.exports = { createSkill, findAll, updateOneById, deleteOneById };
