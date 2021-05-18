const knex = require('../config');
const createRequestModel = require('../utils/createKnexModel');

const Table = 'Request';
const Tableid = 'RequestId';
const TableColumns = [
  'RequestId',
  'User_id',
  'Client_id',
  'DownPayment',
  'Location',
  'Status_Id',
  'ArrangeDate',
  'CreatedAt',
];
const Request = createRequestModel(knex, Table, TableColumns, Tableid);

Request.updateOneByIdSetToComplete = (idRequest, updateStatus) => {
  //with a validator we are going to make sure that we only update
  // the property updateStatus

  return knex
    .update(updateStatus)
    .from(Table)
    .where({ [tableId]: idRequest });
};

Request.findRequestByUserByClient = (idClient, idUser) => {
  return knex
    .select('*')
    .from(Table)
    .where({ User_id: idUser, Client_id: idClient });
};

Request.findAllRequestFromOneUser = (idUser) => {
  return knex.select('*').from(Table).where({ User_id: idUser });
};

Request.findAllRequestFromOneClient = (idClient) => {
  return knex.select('*').from(Table).where({ Client_id: idClient });
};

// Request.updateRequestByUserIdByClientId = (idClient, idUser, body) => {
//   return knex
//     .update(body)
//     .from(Table)
//     .where({ User_id: idUser, Client_id: idClient });
// };
module.exports = Request;
