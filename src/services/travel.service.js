const { Travel } = require("../models");

/**
 * Create Travel
 * @param {object} reqBody
 * @returns {Promise<Travel>}
 */
const createTravel = async (reqBody) => {
  return Travel.create(reqBody);
};

/**
 * Get Travel list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Travel>}
 */
const getTravelList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  // return Travel.find(filter).skip(skip).limit(options.limit).select("-password");
  return Travel.find({ $or: [{ destination: "Rajkot" }] })
};

/**
 * Get Travel details by id
 * @param {ObjectId} travelId
 * @returns {Promise<Travel>}
 */
const getTravelById = async (travelId) => {
  return Travel.findById(travelId);
};

/**
 * Delete Travel
 * @param {ObjectId} travelId
 * @returns {Promise<Travel>}
 */
const deleteTravel = async (travelId) => {
  return Travel.findByIdAndDelete(travelId);
};

/**
 * travel details update by id
 * @param {ObjectId} travelId
 * @param {object} updateBody
 * @returns {Promise<Travel>}
 */
const updateDetails = async (travelId, updateBody) => {
  return Travel.findByIdAndUpdate(travelId, { $set: { updateBody } })
}

const getTravelByName = async (travel_name) => {
  return Travel.findOne({ travel_name });
};

module.exports = {
  createTravel,
  getTravelList,
  deleteTravel,
  getTravelById,
  updateDetails,
  getTravelByName
};
