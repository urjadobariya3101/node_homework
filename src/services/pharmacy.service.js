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

/**update pharmacy
 * @param {ObjectId} pharmacyId
 * @param {object} updateBody
 * @returns {Promise<Pharmacy>}
 */
const updateDetails = async (pharmacyId, updateBody) => {
  return Pharmacy.findByIdAndUpdate(pharmacyId, {$set : {updateBody}})
}

const getPharmacyByName = async (pharmacy_name) => {
  return Pharmacy.findOne({ pharmacy_name });
};

module.exports = {
  createPharmacy,
  getPharmacyList,
  deletePharmacy,
  getPharmacyById,
  updateDetails,
  getPharmacyByName
};
