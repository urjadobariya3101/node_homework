const Joi = require('joi');

/** create bus */
const createBus = {
    body : Joi.object().keys({
        bus_name : Joi.string().required().trim(),
        bus_number : Joi.number().integer().required(),
        capacity : Joi.number().integer().required(),
        seat_price : Joi.number().integer().required()
    }),
};

/** GEt Bus list */
const getBusList = {
    query: Joi.object().keys({
      search: Joi.string().trim().allow(""),
      sortBy: Joi.string().trim().allow(""),
      limit: Joi.number().integer().allow(""),
      page: Joi.number().integer().allow(""),
    }),
  };

  /** Get Bus details by id */
  const getDetails = {
    params: Joi.object().keys({
      busId: Joi.string().required().trim(),
    }),
  };

  module.exports = {
    createBus,
    getBusList,
    getDetails
  };
