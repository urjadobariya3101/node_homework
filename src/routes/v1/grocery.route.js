const express = require("express");
const { groceryValidation } = require("../../validations");
const { groceryController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** create grocery */
router.post(
  "/create-grocery",
  auth(),
  validate(groceryValidation.createGrocery),
  groceryController.createGrocery
);

/** Get grocery list */
router.get(
  "/list",
  auth(),
  validate(groceryValidation.getGroceryList),
  groceryController.getGroceryList
);

/** Delete grocery */
router.delete(
  "/delete-grocery/:groceryId",
  auth(),
  validate(groceryValidation.getDetails),
  groceryController.deleteGrocery
);

/** update grocery */
router.put(
  "/update-grocery/:groceryId",
  auth(),
  validate(groceryValidation.updateDetails),
  groceryController.updateDetails
)

module.exports = router;
