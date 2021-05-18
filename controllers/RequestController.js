const { Request, User } = require('../models');

const create = async (req, res) => {
  try {
    await Request.create(req.body);
    res.status(200).json({
      message: 'User created',
    });
  } catch (error) {
    res.status(500).json({ message: err });
  }
};

const findAll = async (req, res) => {
  try {
    const resDB = await Request.findAllNoActiveOption();
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
  const { idRequest } = req.params;

  try {
    const resDB = await Request.findOneById(idRequest);
    if (resDB.length === 0)
      return res
        .status(404)
        .json({ message: "provided Request doesn't exist" });
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
    const response = await Request.updateOneById(idRequest, req.body);
    res.status(200).json({
      message: 'Succesfully updated Request by Id',
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
  const { idRequest } = req.params;

  try {
    await Request.deleteOneById(idRequest);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error,
    });
  }
};

const setToComplete = async (req, res) => {
  const { idRequest } = req.params;
  const updateStatus = { Status_Id: 1 };
  try {
    await Request.updateOneByIdSetToComplete(idRequest, updateStatus);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error,
    });
  }
};

const findAllRequest = async (req, res) => {
  const { idClient, idUser } = req.params;

  try {
    const resDB = await Request.findRequestByUserByClient(idClient, idUser);
    if (resDB.length === 0)
      return res.status(404).json({ message: 'Empty List' });
    res
      .status(204)
      .json({ message: 'Succesfully return list of Request', response: resDB });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error,
    });
  }
};

// const updateRequestByUserIdByClientId = async (req, res) => {
//   const { idClient, idUser } = req.params;

//   try {
//     const resDb = await Request.updateRequestByUserIdByClientId(
//       idClient,
//       idUser,
//       req.body
//     );
//     res.status(204).json({ message: 'Succesfully return list of Request' });
//   } catch (error) {
//     res.status(500).json({
//       message: 'Server Error',
//       error,
//     });
//   }
// };

const findAllRequestFromOneUser = async (req, res) => {
  const { idUser } = req.params;
  try {
    const resDB = await Request.findAllRequestFromOneUser(idUser);
    if (resDB.length === 0)
      return res.status(404).json({ message: 'Empty List' });
    res
      .status(204)
      .json({ message: 'Successfully obtained list of rentals', resDB });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error,
    });
  }
};

const findAllRequestFromOneClient = async (req, res) => {
  const { idClient } = req.params;
  try {
    const resDB = await Request.findAllRequestFromOneClient(idClient);
    if (resDB.length === 0)
      return res.status(404).json({ message: 'Empty List' });
    res
      .status(204)
      .json({ message: 'Successfully obtained list of rentals', resDB });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      error,
    });
  }
};

module.exports = {
  create,
  findAll,
  findOneById,
  updateOneById,
  deleteOneById,
  setToComplete,
  findAllRequest,
  findAllRequestFromOneUser,
  findAllRequestFromOneClient,
};
