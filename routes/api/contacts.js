const express = require("express");
const authenticate = require("../../middlewares/authenticate");
const ctrl = require("../../controllers/contacts");
const { validateBody } = require("../../utils");
const isValidId = require("../../middlewares/isValidId");
const schemas = require("../../schemas");
const router = express.Router();

router.get("/", authenticate, ctrl.listContacts);
router.get("/:contactId", authenticate, isValidId, ctrl.getContactById);
router.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  ctrl.addContact
);
router.delete("/:contactId", authenticate, isValidId, ctrl.removeContact);
router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.updateSchema),
  ctrl.updateContactById
);
router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  ctrl.updateStatusContact
);

module.exports = router;
