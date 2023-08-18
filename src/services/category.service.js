const { Category } = require("../models");

/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<User>}
 */
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

/**
 * Get category list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getCategoryList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  return Category.find(filter).skip(skip).limit(options.limit).select("-password");
};



module.exports = {
  createCategory,
  getCategoryList
};
