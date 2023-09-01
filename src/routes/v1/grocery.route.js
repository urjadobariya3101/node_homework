const express = require("express");
const { groceryValidation } = require("../../validations");
const { groceryController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** create grocery */
router.post(
  "/create-grocery",
  validate(groceryValidation.createGrocery),
  auth(),
  groceryController.createGrocery
);

/** Get grocery list */
router.get(
  "/list",
  validate(groceryValidation.getGroceryList),
  auth(),
  groceryController.getGroceryList
);

/** Delete grocery */
router.delete(
  "/delete-grocery/:groceryId",
  validate(groceryValidation.getDetails),
  auth(),
  groceryController.deleteGrocery
);

/** update grocery */
router.put(
  "/update-grocery/:groceryId",
  validate(groceryValidation.updateDetails),
  auth(),
  groceryController.updateDetails
)

module.exports = router;
