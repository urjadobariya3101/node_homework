const express = require("express");
const { busValidation } = require("../../validations");
const { busController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth")

const router = express.Router();

/** create bus */
router.post(
  "/create-bus",
  auth(),
  validate(busValidation.createBus),
  busController.createBus
);

/** Get bus list */
router.get(
  "/list",
  auth(),
  validate(busValidation.getBusList),
  busController.getBusList
);

/** Delete bus */
router.delete(
  "/delete-bus/:busId",
  auth(),
  validate(busValidation.getDetails),
  busController.deleteBus
);

/**U[date bus */
router.put(
  "/update-bus/:busId",
  auth(),
  validate(busValidation.updateDetails),
  busController.updateDetails
);

module.exports = router;

