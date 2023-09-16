const Joi = require("joi");

/** create Category */
const createCategory = {
  body: Joi.object().keys({
    category_name: Joi.string().required().trim(),
    category_desc: Joi.string().required().trim()
  }),
};

/** GEt Category list */
const getCategoryList = {
  query: Joi.object().keys(),
};

/** Get Category details by id */
const getDetails = {
  params: Joi.object().keys({
    categoryId: Joi.string().required().trim(),
  }),
};

/**update category by id */
const updateDetails = {
  params: Joi.object().keys({
    categoryId: Joi.string().required().trim(),
  }),
  body:Joi.object().keys({
    category_name: Joi.string().required().trim(),
    category_desc: Joi.string().required().trim()
  }),
};

module.exports = {
  createCategory,
  getCategoryList,
  getDetails,
  updateDetails
};
