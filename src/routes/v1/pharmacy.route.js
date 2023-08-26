const express = require("express");
const { pharmacyValidation } = require("../../validations");
const { pharmacyController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create pharmacy */
router.post(
  "/create-pharmacy",
  validate(pharmacyValidation.createPharmacy),
  pharmacyController.createPharmacy
);

/** Get pharmacy list */
router.get(
  "/list",
  validate(pharmacyValidation.getPharmacyList),
  pharmacyController.getPharmacyList
);

/** Delete pharmacy */
router.delete(
  "/delete-pharmacy/:pharmacyId",
  validate(pharmacyValidation.getDetails),
  pharmacyController.deletePharmacy
);

module.exports = router;
