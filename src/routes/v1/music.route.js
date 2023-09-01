const express = require("express");
const { musicValidation } = require("../../validations");
const { musicController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** create music */
router.post(
  "/create-music",
  validate(musicValidation.createMusic),
  auth(),
  musicController.createMusic
);

/** Get music list */
router.get(
  "/list",
  validate(musicValidation.getMusicList),
  auth(),
  musicController.getMusicList
);

/** Delete music */
router.delete(
  "/delete-music/:musicId",
  validate(musicValidation.getDetails),
  auth(),
  musicController.deleteMusic
);

/**update music */
router.put(
  "/update-music/:musicId",
  validate(musicValidation.updateDetails),
  auth(),
  musicController.updateDetails
)

module.exports = router;
