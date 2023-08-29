const Joi = require("joi");

/** create Grocery */
const createGrocery = {
  body: Joi.object().keys({
    grocery_shop_name: Joi.string().required().trim(),
    item: Joi.string().required().trim(),
    price: Joi.number().integer().required()
  }),
};

/** GEt Grocery list */
const getGroceryList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get Grocery details by id */
const getDetails = {
  params: Joi.object().keys({
    groceryId: Joi.string().required().trim(),
  }),
};

/**grocery detail update by id */
const updateDetails = {
  params: Joi.object().keys({
    groceryId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    grocery_shop_name: Joi.string().required().trim(),
    item: Joi.string().required().trim(),
    price: Joi.number().integer().required()
  })
}

module.exports = {
  createGrocery,
  getGroceryList,
  getDetails,
  updateDetails
};
