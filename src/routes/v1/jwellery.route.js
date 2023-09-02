const express = require("express");
const { jwelleryValidation } = require("../../validations");
const { jwelleryController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** create jwellery */
router.post(
  "/create-jwellery",
  auth(),
  validate(jwelleryValidation.createJwellery),
  jwelleryController.createJwellery
);

/** Get jwellery list */
router.get(
  "/list",
  auth(),
  validate(jwelleryValidation.getJwelleryList),
  jwelleryController.getJwelleryList
);

/** Delete jwellery */
router.delete(
  "/delete-jwellery/:jwelleryId",
  auth(),
  validate(jwelleryValidation.getDetails),
  jwelleryController.deleteJwellery
);

/**Update jwellery */
router.put(
  "/update-jwellery/:jwelleryId",
  auth(),
  validate(jwelleryValidation.updateDetails),
  jwelleryController.updateDetails
)

module.exports = router;
