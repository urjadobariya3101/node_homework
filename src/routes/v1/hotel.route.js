const express = require("express");
const { hotelValidation } = require("../../validations");
const { hotelController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

/** create hotel */
router.post(
  "/create-hotel",
  validate(hotelValidation.createHotel),
  hotelController.createHotel
);

/** Get hotel list */
router.get(
  "/list",
  validate(hotelValidation.getHotelList),
  hotelController.getHotelList
);

/** Delete hotel */
router.delete(
  "/delete-hotel/:hotelId",
  validate(hotelValidation.getDetails),
  hotelController.deleteHotel
);

/**Update hotel */
router.put(
  "/update-hotel/:hotelId",
  validate(hotelValidation.updateDetails),
  hotelController.updateDetails
)

module.exports = router;

