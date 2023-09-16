const express = require("express");
const { productValidation } = require("../../validations");
const { productController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** create product */
router.post(
  "/create-product",
  auth(),
  validate(productValidation.createProduct),
  productController.createProduct
);

/** Get product list */
router.get(
  "/list",
  auth(),
  validate(productValidation.getProductList),
  productController.getProductList
);

/** Delete product */
router.delete(
  "/delete-product/:productId",
  auth(),
  validate(productValidation.getDetails),
  productController.deleteProduct
);

/** update product */
router.put(
  "/update-product/:productId",
  auth(),
  validate(productValidation.updateDetails),
  productController.updateDetails
);

module.exports = router;
