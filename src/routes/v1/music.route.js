const express = require("express");
const { musicValidation } = require("../../validations");
const { musicController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** create music */
router.post(
  "/create-music",
  auth(),
  validate(musicValidation.createMusic),
  musicController.createMusic
);

/** Get music list */
router.get(
  "/list",
  auth(),
  validate(musicValidation.getMusicList),
  musicController.getMusicList
);

/** Delete music */
router.delete(
  "/delete-music/:musicId",
  auth(),
  validate(musicValidation.getDetails),
  musicController.deleteMusic
);

/**update music */
router.put(
  "/update-music/:musicId",
  auth(),
  validate(musicValidation.updateDetails),
  musicController.updateDetails
)

module.exports = router;
