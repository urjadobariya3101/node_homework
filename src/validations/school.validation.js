const Joi = require("joi");

/** create School */
const createSchool = {
  body: Joi.object().keys({
    school_name: Joi.string().required().trim(),
    student_name: Joi.string().required().trim(),
    std: Joi.number().integer().required(),
    area: Joi.string().required().trim()
  }),
};

/** GEt School list */
const getSchoolList = {
  query: Joi.object().keys({
    search: Joi.string().trim().allow(""),
    sortBy: Joi.string().trim().allow(""),
    limit: Joi.number().integer().allow(""),
    page: Joi.number().integer().allow(""),
  }),
};

/** Get School details by id */
const getDetails = {
  params: Joi.object().keys({
    schoolId: Joi.string().required().trim(),
  }),
};

/**school detail update by id */
const updateDetails = {
  params: Joi.object().keys({
    schoolId: Joi.string().required().trim(),
  }),
  body: Joi.object().keys({
    school_name: Joi.string().required().trim(),
    student_name: Joi.string().required().trim(),
    std: Joi.number().integer().required(),
    area: Joi.string().required().trim()
  })
}

module.exports = {
  createSchool,
  getSchoolList,
  getDetails,
  updateDetails
};
