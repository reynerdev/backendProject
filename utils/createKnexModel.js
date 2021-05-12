function createKnexModel(knex, tableName, tableColumns, tableId) {
  const create = (body) => {
    //body User, body Rental

    return knex(tableName).insert(body);
  };

  const findAll = () => {
    return knex.select(tableColumns).from(tableName).where({ Active: true });
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
    create,
    findAll,
    findOneById,
    updateOneById,
    deleteOneById,
  };
}

module.exports = createKnexModel;
