const { Bus } = require("../models");

/**
 * Create bus
 * @param {object} reqBody
 * @returns {Promise<Bus>}
 */
const createBus = async (reqBody) => {
  return Bus.create(reqBody);
};

/**
 * Get bus list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Bus>}
 */
const getBusList = async (filter, options) => {
  // const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);
  // return Bus.find();
  return Bus.find({ $or: [{ capacity : 20 }] })
  // return Bus.find(filter).skip(skip).limit(options.limit).select("-password");

};

/**
 * Get bus details by id
 * @param {ObjectId} busId
 * @returns {Promise<Bus>}
 */
const getBusById = async (busId) => {
  return Bus.findById(busId);
};

/**
 * Delete bus
 * @param {ObjectId} busId
 * @returns {Promise<Bus>}
 */
const deleteBus = async (busId) => {
  return Bus.findByIdAndDelete(busId);
};

module.exports = {
  createBus,
  getBusList,
  deleteBus,
  getBusById
};
