const { Grocery } = require("../models");

/**
 * Create Grocery
 * @param {object} reqBody
 * @returns {Promise<Grocery>}
 */
const createGrocery = async (reqBody) => {
  return Grocery.create(reqBody);
};

/**
 * Get Grocery list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Grocery>}
 */
const getGroceryList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  // return Grocery.find(filter).skip(skip).limit(options.limit).select("-password");
  return Grocery.find({$or : [{price : 200}]})
};

/**
 * Get Grocery details by id
 * @param {ObjectId} groceryId
 * @returns {Promise<Grocery>}
 */
const getGroceryById = async (groceryId) => {
  return Grocery.findById(groceryId);
};

/**
 * Delete grocery
 * @param {ObjectId} groceryId
 * @returns {Promise<Grocery>}
 */
const deleteGrocery = async (groceryId) => {
  return Grocery.findByIdAndDelete(groceryId);
};

/**
 * update grocery
 * @param {ObjectId} groceryId
 * @param {object} updateBody
 * @returns {Promise<Grocery>}
 */
const updateDetails = async (groceryId, updateBody) => {
  return Grocery.findByIdAndUpdate(groceryId, {$set : {updateBody}})
};

const getGroceryByName = async (grocery_name) => {
  return Grocery.findOne({ grocery_name });
};

module.exports = {
  createGrocery,
  getGroceryList,
  getGroceryById,
  deleteGrocery,
  updateDetails,
  getGroceryByName
};
