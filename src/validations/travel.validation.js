const Joi = require("joi");

/** create Travel */
const createTravel = {
  body: Joi.object().keys({
    traveler_name: Joi.string().required().trim(),
    destination: Joi.string().required().trim(),
    pick_up_point: Joi.string().required().trim()
  })
};

/** GEt Travel list */
const getTravelList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Travel details by id */
const getDetails = {
  params: Joi.object().keys({
    travelId: Joi.string().required().trim(),
  }),
};

module.exports = {
  createTravel,
  getTravelList,
  getDetails
};
