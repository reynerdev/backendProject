//a travez de una ENV a que ambiente de trabajo nos vamos a conectar
const env = process.env.NODE_ENV;

const knexfile = require('./knexfile');
const knex = require('knex');

const knexInstance = knex(knexfile['development']);

module.exports = knexInstance; //exportamos la instancia con el tipo de env correspondiente
