const express = require("express");
const { travelValidation } = require("../../validations");
const { travelController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** create travel */
router.post(
  "/create-travel",
  validate(travelValidation.createTravel),
  auth(),
  travelController.createTravel
);

/** Get travel list */
router.get(
  "/list",
  validate(travelValidation.getTravelList),
  auth(),
  travelController.getTravelList
);

/** Update details of travel */
router.put(
  "/update-travel/:travelId",
  validate(travelValidation.updateDetails),
  auth(),
  travelController.updateDetails
)

/** Delete travel */
router.delete(
  "/delete-travel/:travelId",
  validate(travelValidation.getDetails),
  auth(),
  travelController.deleteTravel
);

module.exports = router;

