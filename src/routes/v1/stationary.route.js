const express = require('express');
const { stationaryValidation } = require('../../validations');
const { stationaryController } = require('../../controllers');
const validate = require('../../middlewares/validate');
const auth = require("../../middlewares/auth");

const router = express.Router();

/** create Stationary */
router.post(
    "/create-stationary",
    validate(stationaryValidation.createStationary),
    auth(),
    stationaryController.createStationary
  );

  /** Get stationary list */
  router.get(
    "/list",
    validate(stationaryValidation.getStationaryList),
    auth(),
    stationaryController.getStationaryList
  );

  /** Delete book */
router.delete(
  "/delete-stationary/:stationaryId",
  validate(stationaryValidation.getDetails),
  auth(),
  stationaryController.deleteStationary
);

/**Update stationary */
router.put(
  "/update-stationary/:stationaryId",
  validate(stationaryValidation.updateDetails),
  auth(),
  stationaryController.updateDetails
);

module.exports = router;