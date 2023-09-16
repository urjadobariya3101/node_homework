const Joi = require("joi");

/** create product */
const createProduct = {
  body: Joi.object().keys({
    product_name: Joi.string().required().trim(),
    product_price: Joi.number().integer().required(),
    product_desc: Joi.string().required().trim(),
    category: Joi.string().required().trim()
  }),
};

/** GEt Product list */
const getProductList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Product details by id */
const getDetails = {
  params: Joi.object().keys({
    productId: Joi.string().required().trim(),
  }),
};

/**product update by id */
const updateDetails = {
  params: Joi.object().keys({
    productId: Joi.string().required().trim(),
  }),
  body : Joi.object().keys({
    product_name: Joi.string().required().trim(),
    product_price: Joi.number().integer().required(),
    product_desc: Joi.string().required().trim(),
    address: Joi.string().required().trim(),
  }),
};

module.exports = {
  createProduct,
  getProductList,
  getDetails,
  updateDetails
};
