const { Jwellery } = require("../models");

/**
 * Create jwellery
 * @param {object} reqBody
 * @returns {Promise<Jwellery>}
 */
const createJwellery = async (reqBody) => {
  return Jwellery.create(reqBody);
};

/**
 * Get jwellery list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Jwellery>}
 */
const getJwelleryList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  // return Jwellery.find(filter).skip(skip).limit(options.limit).select("-password");
  return Jwellery.find({ $or: [{ price: 1000 }] })
};

/**
 * Get jwellery details by id
 * @param {ObjectId} jwelleryId
 * @returns {Promise<Jwellery>}
 */
const getJwelleryById = async (jwelleryId) => {
  return Jwellery.findById(jwelleryId);
};

/**
 * Delete jwellery
 * @param {ObjectId} jwelleryId
 * @returns {Promise<Jwellery>}
 */
const deleteJwellery = async (jwelleryId) => {
  return Jwellery.findByIdAndDelete(jwelleryId);
};

/**
 * update jwellery
 * @param {ObjectId} jwelleryId
 * @param {object} updateBody
 * @returns {Promise<Movie>}
 */
const updateDetails = async (jwelleryId, updateBody) => {
  return Jwellery.findByIdAndUpdate(jwelleryId, { $set: { updateBody } })
};

const getJwelleryByName = async (jwellery_name) => {
  return Jwellery.findOne({ jwellery_name });
};

module.exports = {
  createJwellery,
  getJwelleryList,
  getJwelleryById,
  deleteJwellery,
  updateDetails,
  getJwelleryByName
};
