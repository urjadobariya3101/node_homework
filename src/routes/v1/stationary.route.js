const express = require('express');
const { stationaryValidation } = require('../../validations');
const { stationaryController } = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

/** create Stationary */
router.post(
    "/create-stationary",
    validate(stationaryValidation.createStationary),
    stationaryController.createStationary
  );

  /** Get stationary list */
  router.get(
    "/list",
    validate(stationaryValidation.getStationaryList),
    stationaryController.getStationaryList
  );

  /** Delete book */
router.delete(
  "/delete-stationary/:stationaryId",
  validate(stationaryValidation.getDetails),
  stationaryController.deleteStationary
);

module.exports = router;