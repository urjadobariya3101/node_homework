const express = require("express");
const { pharmacyValidation } = require("../../validations");
const { pharmacyController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** create pharmacy */
router.post(
  "/create-pharmacy",
  validate(pharmacyValidation.createPharmacy),
  auth(),
  pharmacyController.createPharmacy
);

/** Get pharmacy list */
router.get(
  "/list",
  validate(pharmacyValidation.getPharmacyList),
  auth(),
  pharmacyController.getPharmacyList
);

/** Delete pharmacy */
router.delete(
  "/delete-pharmacy/:pharmacyId",
  validate(pharmacyValidation.getDetails),
  auth(),
  pharmacyController.deletePharmacy
);

/** update pharmacy */
router.put(
  "/update-pharmacy/:pharmacyId",
  validate(pharmacyValidation.updateDetails),
  auth(),
  pharmacyController.updateDetails
);

module.exports = router;
