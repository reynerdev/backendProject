const {celebrate, Joi, Segments} = require('celebrate')


module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            Name: Joi.string().alphanum().required(),
            LastName: Joi.string().alphanum.required(),
            UserEmail: Joi.string().email().required,
            Birthday: Joi.






        })


    })


}