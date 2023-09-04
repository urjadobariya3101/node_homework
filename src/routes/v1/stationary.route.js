const express = require('express');
const { stationaryValidation } = require('../../validations');
const { stationaryController } = require('../../controllers');
const validate = require('../../middlewares/validate');
// const auth = require("../../middlewares/auth");

const router = express.Router();

/** create Stationary */
router.post(
    "/create-stationary",
    // auth(),
    validate(stationaryValidation.createStationary),
    stationaryController.createStationary
  );

  /** Get stationary list */
  router.get(
    "/list",
    // auth(),
    validate(stationaryValidation.getStationaryList),
    stationaryController.getStationaryList
  );

  /** Delete book */
router.delete(
  "/delete-stationary/:stationaryId",
  // auth(),
  validate(stationaryValidation.getDetails),
  stationaryController.deleteStationary
);

/**Update stationary */
router.put(
  "/update-stationary/:stationaryId",
  // auth(),
  validate(stationaryValidation.updateDetails),
  stationaryController.updateDetails
);

module.exports = router;