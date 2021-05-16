const knex = require('../config');
const createClientModel = require('../utils/createKnexModel')
// const create = (bodyClient) => {
//   //esto de aca nos devuelve una promesa. Pero se decide manejarlo a nivel de controlador
//   //   knex('User').insert(bodyRental);
// };

// const TABLE = ''
// const Client = createClientModel()

const Table = 'Client'
const Tableid = 'ClientId'
const TableColumns = ['ClientId','ClientName','ClientLastname','ClientPassword','ClientEmail','Rating','Spent','CreatedAt']
const Client = createClientModel(knex,Table,TableColumns,Tableid)

module.exports = Client
