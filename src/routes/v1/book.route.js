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

/** Delete book */
router.delete(
  "/delete-book/:bookId",
  validate(bookValidation.getDetails),
  bookController.deleteBook
);

/**Update Book */
router.put(
  "/update-book/:bookId",
  validate(bookValidation.updateDetails),
  bookController.updateDetails
)

module.exports = router;

