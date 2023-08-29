const { Hotel } = require("../models");

/**
 * Create hotel
 * @param {object} reqBody
 * @returns {Promise<Hotel>}
 */
const createHotel = async (reqBody) => {
  return Hotel.create(reqBody);
};

/**
 * Get hotel list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Hotel>}
 */
const getHotelList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  // return Hotel.find(filter).skip(skip).limit(options.limit).select("-password");
  return Hotel.find({ $or: [{ staff: 20 }] })
};

/**
 * Get hotel details by id
 * @param {ObjectId} hotelId
 * @returns {Promise<Hotel>}
 */
const getHotelById = async (hotelId) => {
  return Hotel.findById(hotelId);
};

/**
 * Delete hotel
 * @param {ObjectId} hotelId
 * @returns {Promise<Hotel>}
 */
const deleteHotel = async (hotelId) => {
  return Hotel.findByIdAndDelete(hotelId);
};

/**
 * update hotel
 * @param {ObjectId} hotelId
 * @param {object} updateBody
 * @returns {Promise<Hotel>}
 */
const updateDetails = async (hotelId, updateBody) => {
  return Hotel.findByIdAndUpdate(hotelId, { $set: { updateBody } })
}

const getHotelByName = async (hotel_name) => {
  return Hotel.findOne({ hotel_name });
};

module.exports = {
  createHotel,
  getHotelList,
  deleteHotel,
  getHotelById,
  updateDetails,
  getHotelByName
};
