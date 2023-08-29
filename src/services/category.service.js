const { Category } = require("../models");

/**
 * Create category
 * @param {object} reqBody
 * @returns {Promise<Category>}
 */
const createCategory = async (reqBody) => {
  return Category.create(reqBody);
};

/**
 * Get category list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Category>}
 */
const getCategoryList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  // return Category.find(filter).skip(skip).limit(options.limit).select("-password");
  return Category.find({ $or: [{ is_active: true }] })
};

/**
 * Get category details by id
 * @param {ObjectId} categoryId
 * @returns {Promise<Category>}
 */
const getCategoryById = async (categoryId) => {
  return Category.findById(categoryId);
};

/**
 * Delete category
 * @param {ObjectId} categoryId
 * @returns {Promise<Category>}
 */
const deleteCategory = async (categoryId) => {
  return Category.findByIdAndDelete(categoryId);
};

/**
 * update category
 * @param {ObjectId} categoryId
 * @param {object} updateBody
 * @returns {Promise<Category>}
 */
const updateDetails = async (categoryId, updateBody) => {
  return Category.findByIdAndUpdate(categoryId, { $set: { updateBody } })
};

const getCategoryByName = async (category_name) => {
  return Category.findOne({ category_name });
};

module.exports = {
  createCategory,
  getCategoryList,
  deleteCategory,
  getCategoryById,
  updateDetails,
  getCategoryByName
};
