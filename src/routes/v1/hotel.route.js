const express = require("express");
const { hotelValidation } = require("../../validations");
const { hotelController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** create hotel */
router.post(
  "/create-hotel",
  validate(hotelValidation.createHotel),
  auth(),
  hotelController.createHotel
);

/** Get hotel list */
router.get(
  "/list",
  validate(hotelValidation.getHotelList),
  auth(),
  hotelController.getHotelList
);

/** Delete hotel */
router.delete(
  "/delete-hotel/:hotelId",
  validate(hotelValidation.getDetails),
  auth(),
  hotelController.deleteHotel
);

/**Update hotel */
router.put(
  "/update-hotel/:hotelId",
  validate(hotelValidation.updateDetails),
  auth(),
  hotelController.updateDetails
)

module.exports = router;

