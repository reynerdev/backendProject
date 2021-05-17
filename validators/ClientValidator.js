const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      ClientName: Joi.string().required(),
      ClientLastName: Joi.string().required(),
      ClientPassword: Joi.string().required(),
      ClientEmail: Joi.string().required(),
    }),
  }),
};
