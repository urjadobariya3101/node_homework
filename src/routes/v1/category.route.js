const express = require("express");
const { categoryValidation } = require("../../validations");
const { categoryController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth")

const router = express.Router();

/** create category */
router.post(
  "/create-category",
  validate(categoryValidation.createCategory),
  auth(),
  categoryController.createCategory
);

/** Get category list */
router.get(
  "/list",
  validate(categoryValidation.getCategoryList),
  auth(),
  categoryController.getCategoryList
);

/** Delete category */
router.delete(
  "/delete-category/:categoryId",
  validate(categoryValidation.getDetails),
  auth(),
  categoryController.deleteCategory
);

/**Update category */
router.put(
  "/update-category/:categoryId",
  validate(categoryValidation.updateDetails),
  auth(),
  categoryController.updateDetails
);

module.exports = router;
