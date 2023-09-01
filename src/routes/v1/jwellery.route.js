const express = require("express");
const { jwelleryValidation } = require("../../validations");
const { jwelleryController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** create jwellery */
router.post(
  "/create-jwellery",
  validate(jwelleryValidation.createJwellery),
  auth(),
  jwelleryController.createJwellery
);

/** Get jwellery list */
router.get(
  "/list",
  validate(jwelleryValidation.getJwelleryList),
  auth(),
  jwelleryController.getJwelleryList
);

/** Delete jwellery */
router.delete(
  "/delete-jwellery/:jwelleryId",
  validate(jwelleryValidation.getDetails),
  auth(),
  jwelleryController.deleteJwellery
);

/**Update jwellery */
router.put(
  "/update-jwellery/:jwelleryId",
  validate(jwelleryValidation.updateDetails),
  auth(),
  jwelleryController.updateDetails
)

module.exports = router;
