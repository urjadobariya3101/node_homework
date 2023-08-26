const Joi = require('joi');

/** create jwellery */
const createJwellery = {
    body: Joi.object().keys({
        jwellery_name: Joi.string().required().trim(),
        price: Joi.number().integer().required(),
        jwellery_type: Joi.string().required().trim()
    }),
};

/** Get jwellery list */
const getJwelleryList = {
    query: Joi.object().keys({
        search: Joi.string().trim().allow(""),
        sortBy: Joi.string().trim().allow(""),
        limit: Joi.number().integer().allow(""),
        page: Joi.number().integer().allow("")
    }),
};

/** Get jwellery details by id */
const getDetails = {
    params: Joi.object().keys({
        jwelleryId: Joi.string().required().trim(),
    }),
};

module.exports = {
    createJwellery,
    getJwelleryList,
    getDetails
}