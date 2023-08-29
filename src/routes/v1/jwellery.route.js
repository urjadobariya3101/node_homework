const express = require("express");
const { jwelleryValidation } = require("../../validations");
const { jwelleryController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create jwellery */
router.post(
  "/create-jwellery",
  validate(jwelleryValidation.createJwellery),
  jwelleryController.createJwellery
);

/** Get jwellery list */
router.get(
  "/list",
  validate(jwelleryValidation.getJwelleryList),
  jwelleryController.getJwelleryList
);

/** Delete jwellery */
router.delete(
  "/delete-jwellery/:jwelleryId",
  validate(jwelleryValidation.getDetails),
  jwelleryController.deleteJwellery
);

/**Update jwellery */
router.put(
  "/update-jwellery/:jwelleryId",
  validate(jwelleryValidation.updateDetails),
  jwelleryController.updateDetails
)

module.exports = router;
