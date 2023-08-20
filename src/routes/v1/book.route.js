const express = require("express");
const { bookValidation } = require("../../validations");
const { bookController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create book */
router.post(
  "/create-book",
  validate(bookValidation.createBook),
  bookController.createBook
);

/** Get book list */
router.get(
  "/list",
  validate(bookValidation.getBookList),
  bookController.getBookList
);

module.exports = router;
