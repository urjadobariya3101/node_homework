const express = require("express");
const { bookValidation } = require("../../validations");
const { bookController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth")

const router = express.Router();

/** create book */
router.post(
  "/create-book",
  validate(bookValidation.createBook),
  auth(),
  bookController.createBook
);

/** Get book list */
router.get(
  "/list",
  validate(bookValidation.getBookList),
  auth(),
  bookController.getBookList
);

/** Delete book */
router.delete(
  "/delete-book/:bookId",
  validate(bookValidation.getDetails),
  auth(),
  bookController.deleteBook
);

/**Update Book */
router.put(
  "/update-book/:bookId",
  validate(bookValidation.updateDetails),
  auth(),
  bookController.updateDetails
)

module.exports = router;

