const express = require("express");
const { movieValidation } = require("../../validations");
const { movieController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create movie */
router.post(
  "/create-movie",
  validate(movieValidation.createMovie),
  movieController.createMovie
);

/** Get movie list */
router.get(
  "/list",
  validate(movieValidation.getMovieList),
  movieController.getMovieList
);

/** Delete movie */
router.delete(
  "/delete-movie/:movieId",
  validate(movieValidation.getDetails),
  movieController.deleteMovie
);

module.exports = router;
