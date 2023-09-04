const { Product } = require("../models");

/**
 * Create Product
 * @param {object} reqBody
 * @returns {Promise<Product>}
 */
const createProduct = async (reqBody) => {
  return Product.create(reqBody);
};

/**
 * Get Product list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Product>}
 */
const getProductList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  // return Product.find(filter).skip(skip).limit(options.limit).select("-password");
  return Product.find()
};

/**
 * Get Product details by id
 * @param {ObjectId} productId
 * @returns {Promise<Product>}
 */
const getProductById = async (productId) => {
  return Product.findById(productId);
};

/**
 * Delete Product
 * @param {ObjectId} productId
 * @returns {Promise<Product>}
 */
const deleteProduct = async (productId) => {
  return Product.findByIdAndDelete(productId);
};

/**update product
 * @param {ObjectId} productId
 * @param {object} updateBody
 * @returns {Promise<Product>}
 */
const updateDetails = async (productId, updateBody) => {
  return Product.findByIdAndUpdate(productId, {$set : {updateBody}})
}

const getProductByName = async (product_name) => {
  return Product.findOne({ product_name });
};

module.exports = {
  createProduct,
  getProductList,
  deleteProduct,
  getProductById,
  updateDetails,
  getProductByName
};
