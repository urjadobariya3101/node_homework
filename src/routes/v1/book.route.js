const express = require("express");
const { bookValidation } = require("../../validations");
const { bookController } = require("../../controllers");
const validate = require("../../middlewares/validate");
// const auth = require("../../middlewares/auth")

const router = express.Router();

/** create book */
router.post(
  "/create-book",
  // auth(),
  validate(bookValidation.createBook),
  bookController.createBook
);

/** Get book list */
router.get(
  "/list",
  // auth(),
  validate(bookValidation.getBookList),
  bookController.getBookList
);

/** Delete book */
router.delete(
  "/delete-book/:bookId",
  // auth(),
  validate(bookValidation.getDetails),
  bookController.deleteBook
);

/**Update Book */
router.put(
  "/update-book/:bookId",
  // auth(),
  validate(bookValidation.updateDetails),
  bookController.updateDetails
)

module.exports = router;

