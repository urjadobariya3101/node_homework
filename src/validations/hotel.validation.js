const Joi = require("joi");

/** create hotel */
const createHotel = {
  body: Joi.object().keys({
    hotel_name: Joi.string().required().trim(),
    manager_name: Joi.string().required().trim(),
    staff: Joi.number().integer().required()
  }),
};

/** GEt Hotel list */
const getHotelList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Hotel details by id */
const getDetails = {
  params: Joi.object().keys({
    hotelId: Joi.string().required().trim(),
  }),
};

module.exports = {
  createHotel,
  getHotelList,
  getDetails
};
