const knex = require('../config');
const createSkillModel = require('../utils/createKnexModel');

const Table = 'Skill';
const Tableid = 'SkillId';
const TableColumns = ['SkillId', 'SkillName', 'Category'];
const Skill = createSkillModel(knex, Table, TableColumns, Tableid);

module.exports = Skill;
