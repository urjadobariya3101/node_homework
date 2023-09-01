const express = require("express");
const { movieValidation } = require("../../validations");
const { movieController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** create movie */
router.post(
  "/create-movie",
  validate(movieValidation.createMovie),
  auth(),
  movieController.createMovie
);

/** Get movie list */
router.get(
  "/list",
  validate(movieValidation.getMovieList),
  auth(),
  movieController.getMovieList
);

/** Delete movie */
router.delete(
  "/delete-movie/:movieId",
  validate(movieValidation.getDetails),
  auth(),
  movieController.deleteMovie
);

/**Update movie */
router.put(
  "/update-movie/:movieId",
  validate(movieValidation.updateDetails),
  auth(),
  movieController.updateDetails
)

module.exports = router;
