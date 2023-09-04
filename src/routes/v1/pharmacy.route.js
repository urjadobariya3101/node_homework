const express = require("express");
const { pharmacyValidation } = require("../../validations");
const { pharmacyController } = require("../../controllers");
const validate = require("../../middlewares/validate");
// const auth = require("../../middlewares/auth");

const router = express.Router();

/** create pharmacy */
router.post(
  "/create-pharmacy",
  // auth(),
  validate(pharmacyValidation.createPharmacy),
  pharmacyController.createPharmacy
);

/** Get pharmacy list */
router.get(
  "/list",
  // auth(),
  validate(pharmacyValidation.getPharmacyList),
  pharmacyController.getPharmacyList
);

/** Delete pharmacy */
router.delete(
  "/delete-pharmacy/:pharmacyId",
  // auth(),
  validate(pharmacyValidation.getDetails),
  pharmacyController.deletePharmacy
);

/** update pharmacy */
router.put(
  "/update-pharmacy/:pharmacyId",
  // auth(),
  validate(pharmacyValidation.updateDetails),
  pharmacyController.updateDetails
);

module.exports = router;
