const Joi = require("joi");

/** create pharmacy */
const createPharmacy = {
  body: Joi.object().keys({
    pharmacy_name: Joi.string().required().trim(),
    product_name: Joi.string().required().trim(),
    address: Joi.string().required().trim()
  }),
};

/** GEt Pharmacy list */
const getPharmacyList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Pharmacy details by id */
const getDetails = {
  params: Joi.object().keys({
    pharmacyId: Joi.string().required().trim(),
  }),
};

/**pharmacy update by id */
const updateDetails = {
  params: Joi.object().keys({
    pharmacyId: Joi.string().required().trim(),
  }),
  body : Joi.object().keys({
    pharmacy_name: Joi.string().required().trim(),
    product_name: Joi.string().required().trim(),
    address: Joi.string().required().trim()
  }),
};

module.exports = {
  createPharmacy,
  getPharmacyList,
  getDetails,
  updateDetails
};
