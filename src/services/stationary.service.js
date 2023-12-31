const { Stationary } = require("../models");

/**
 * Create stationary
 * @param {object} reqBody
 * @returns {Promise<Stationary>}
 */
const createStationary = async (reqBody) => {
  return Stationary.create(reqBody);
};

/**
 * Get stationary stationary
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<User>}
 */
const getStationaryList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  // return Stationary.find(filter).skip(skip).limit(options.limit).select("-password");
  return Stationary.find({$or : [{price : 50}]})
};

/**
 * Get stationary details by id
 * @param {ObjectId} stationaryId
 * @returns {Promise<Stationary>}
 */
const getStationaryById = async (stationaryId) => {
  return Stationary.findById(stationaryId);
};

/**
 * Delete stationary
 * @param {ObjectId} stationaryId
 * @returns {Promise<Stationary>}
 */
const deleteStationary = async (stationaryId) => {
  return Stationary.findByIdAndDelete(stationaryId);
};

/**
 * Update stationary
 * @param {ObjectId} stationaryId
 * @param {object} updateBody
 * @returns {Promise<Stationary>}
 */

const updateDetails = async (stationaryId, updateBody) => {
  return Stationary.findByIdAndUpdate(stationaryId, { $set : {updateBody}})
}

const getStationaryByName = async (stationary_name) => {
  return Stationary.findOne({ stationary_name });
};

module.exports = {
  createStationary,
  getStationaryList,
  getStationaryById,
  deleteStationary,
  updateDetails,
  getStationaryByName
};
