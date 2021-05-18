function createKnexModel(knex, tableName, tableColumns, tableId) {
  const create = (body) => {
    return knex(tableName).insert(body);
  };

  const find = (query, columns) => {
    return knex
      .select(columns)
      .from(tableName)
      .where({ ...query, Active: true });
  };
  const findNoActiveOption = (query) => {
    return knex
      .select('*')
      .from(tableName)
      .where({ ...query });
  };
  const findAll = () => {
    return knex.select(tableColumns).from(tableName).where({ Active: true });
  };

  const findAllNoActiveOption = (id) => {
    return knex.select(tableColumns).from(tableName);
  };

  const findOneById = (id) => {
    return knex
      .select(tableColumns)
      .from(tableName)
      .where({ [tableId]: id, Active: true });
  };

  const updateOneById = (id, updateBody) => {
    return knex
      .update(updateBody)
      .from(tableName)
      .where({ [tableId]: id });
  };

  const deleteOneById = (id) => {
    return knex
      .update({ Active: false })
      .from(tableName)
      .where({ [tableId]: id });
  };

  return {
    find,
    create,
    findAll,
    findOneById,
    updateOneById,
    deleteOneById,
    findAllNoActiveOption,
    findNoActiveOption,
  };
}

module.exports = createKnexModel;
