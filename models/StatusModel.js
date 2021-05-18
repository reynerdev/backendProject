const knex = require('../config');
const createKnexModel = require('../utils/createKnexModel');

const Table = 'Status';
const Tableid = 'StatusId';
const TableColumns = ['StatusId', 'Description'];
const Status = createKnexModel(knex, Table, TableColumns, Tableid);

module.exports = Status;
