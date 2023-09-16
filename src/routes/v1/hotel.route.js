const express = require("express");
const { hotelValidation } = require("../../validations");
const { hotelController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** create hotel */
router.post(
  "/create-hotel",
  auth(),
  validate(hotelValidation.createHotel),
  hotelController.createHotel
);

/** Get hotel list */
router.get(
  "/list",
  auth(),
  validate(hotelValidation.getHotelList),
  hotelController.getHotelList
);

/** Delete hotel */
router.delete(
  "/delete-hotel/:hotelId",
  auth(),
  validate(hotelValidation.getDetails),
  hotelController.deleteHotel
);

/**Update hotel */
router.put(
  "/update-hotel/:hotelId",
  auth(),
  validate(hotelValidation.updateDetails),
  hotelController.updateDetails
)

module.exports = router;

