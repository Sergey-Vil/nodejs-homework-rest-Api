const Joi = require("joi");

const emailRegexp = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const registerSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(emailRegexp).required().messages({
    message: `validation failed: email is invalid`,
  }),
  password: Joi.string().min(8).required().messages({
    message: `validation failed: password is invalid`,
  }),
  subscription: Joi.string(),
});

const loginSchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    message: `validation failed: email is invalid`,
  }),
  password: Joi.string().min(8).required().messages({
    message: `validation failed: password is invalid`,
  }),
});
const verifySchema = Joi.object({
  email: Joi.string().pattern(emailRegexp).required().messages({
    message: `Missing required email field`,
  }),
});

module.exports = { registerSchema, loginSchema, verifySchema };
