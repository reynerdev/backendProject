const { celebrate, Joi, Segments } = require('celebrate');

module.exports = {
  create: celebrate({
    [Segments.BODY]: Joi.object().keys({
      Name: Joi.string().required(),
      LastName: Joi.string().required(),
      UserEmail: Joi.string().email().required(),
      Birthday: Joi.date().required(),
      UserPassword: Joi.string().required(),
    }),
  }),
};
