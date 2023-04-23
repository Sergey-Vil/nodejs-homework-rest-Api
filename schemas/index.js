const { addSchema, updateSchema, updateFavoriteSchema } = require("./contacts");

const { registerSchema, loginSchema, verifySchema } = require("./user");

module.exports = {
  addSchema,
  updateSchema,
  updateFavoriteSchema,
  registerSchema,
  loginSchema,
  verifySchema,
};
