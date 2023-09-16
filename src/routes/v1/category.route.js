const express = require("express");
const { categoryValidation } = require("../../validations");
const { categoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth")

const router = express.Router();

/** create category */
router.post(
  "/create-category",
  auth(),
  validate(categoryValidation.createCategory),
  categoryController.createCategory
);

/** Get category list */
router.get(
  "/list",
  auth(),
  validate(categoryValidation.getCategoryList),
  categoryController.getCategoryList
);

/** Delete category */
router.delete(
  "/delete-category/:categoryId",
  auth(),
  validate(categoryValidation.getDetails),
  categoryController.deleteCategory
);

/**Update category */
router.put(
  "/update-category/:categoryId",
  auth(),
  validate(categoryValidation.updateDetails),
  categoryController.updateDetails
);

module.exports = router;
