const { Status } = require('../models');

const create = (req, res) => {
  return Status.create(req.body)
    .then(() => {
      res.status(200).json({
        message: 'Status created',
      });
    })
    .catch((err) => {
      res.status(400).json({ message: err });
    });
};

const findAll = async (req, res) => {
  try {
    const resDB = await Status.findAll();
    if (resDB.length === 0)
      return res.status(404).json({ message: 'Empty List' });
    res.status(200).json({
      message: 'Successfully obtained list of rentals',
      resDB,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error obtaining list of Users',
      error,
    });
  }
};

const findOneById = async (req, res) => {
  const { idStatus } = req.params;
  const a = { StatusId: idStatus };

  try {
    const resDB = await Status.findNoActiveOption({
      StatusId: parseInt(idStatus),
    });
    if (resDB.length === 0)
      return res.status(404).json({ message: "provided Status doesn't exist" });
    res.status(200).json({
      message: 'Successfully obtained Request by id',
      resDB,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error,
    });
  }
};

const updateOneById = async (req, res) => {
  const { idRequest } = req.params;

  try {
    const response = await Status.updateOneById(idRequest, req.body);
    res.status(200).json({
      message: 'Succesfully updated Status by Id',
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
  const { idStatus } = req.params;

  try {
    await Request.deleteOneById(idStatus);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error,
    });
  }
};

module.exports = { create, findAll, findOneById, updateOneById, deleteOneById };
