const Joi = require("joi");

/** create Stationary */
const createStationary = {
  body: Joi.object().keys({
    item: Joi.string().required().trim(),
    price: Joi.number().integer().required()
  }),
};

/** GEt Stationary list */
const getStationaryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Stationary details by id */
const getDetails = {
  params: Joi.object().keys({
    stationaryId: Joi.string().required().trim(),
  }),
};

module.exports = {
  createStationary,
  getStationaryList,
  getDetails
};
