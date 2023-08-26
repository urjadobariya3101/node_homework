const { School } = require("../models");

/**
 * Create School
 * @param {object} reqBody
 * @returns {Promise<School>}
 */
const createSchool = async (reqBody) => {
  return School.create(reqBody);
};

/**
 * Get School list
 * @param {object} filter
 * @param {object} options
 * @returns {Promise<School>}
 */
const getSchoolList = async (filter, options) => {
  const skip = (Number(options.page || 1) - 1) * Number(options.limit || 10);

  // return School.find(filter).skip(skip).limit(options.limit).select("-password");
  return School.find({$or : [{"school_name" : "Aashadeep-2"}]})
};

/**
 * Get school details by id
 * @param {ObjectId} schoolId
 * @returns {Promise<School>}
 */
const getSchoolById = async (schoolId) => {
  return School.findById(schoolId);
};

/**
 * Delete school
 * @param {ObjectId} schoolId
 * @returns {Promise<School>}
 */
const deleteSchool = async (schoolId) => {
  return School.findByIdAndDelete(schoolId);
};

module.exports = {
  createSchool,
  getSchoolList,
  getSchoolById,
  deleteSchool
};
