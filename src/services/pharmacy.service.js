const { Pharmacy } = require("../models");

/**
 * Create Pharmacy
 * @param {object} reqBody
 * @returns {Promise<Pharmacy>}
 */
const createPharmacy = async (reqBody) => {
  return Pharmacy.create(reqBody);
};

/**
 * Get Pharmacy list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<Pharmacy>}
 */
const getPharmacyList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  // return Pharmacy.find(filter).skip(skip).limit(options.limit).select("-password");
  return Pharmacy.find({$or : [{"address" : "Mota varachha"}]})
};

/**
 * Get Pharmacy details by id
 * @param {ObjectId} pharmacyId
 * @returns {Promise<Pharmacy>}
 */
const getPharmacyById = async (pharmacyId) => {
  return Pharmacy.findById(pharmacyId);
};

/**
 * Delete Pharmacy
 * @param {ObjectId} pharmacyId
 * @returns {Promise<Pharmacy>}
 */
const deletePharmacy = async (pharmacyId) => {
  return Pharmacy.findByIdAndDelete(pharmacyId);
};

module.exports = {
  createPharmacy,
  getPharmacyList,
  deletePharmacy,
  getPharmacyById
};
