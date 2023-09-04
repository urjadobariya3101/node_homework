const express = require('express');
const { schoolValidation } = require('../../validations');
const { schoolController } = require('../../controllers');
const validate = require('../../middlewares/validate');
// const auth = require("../../middlewares/auth");

const router = express.Router();

/** create school */
router.post(
    "/create-school",
    // auth(),
    validate(schoolValidation.createSchool),
    schoolController.createSchool
  );

  /** Get school list */
  router.get(
    "/list",
    // auth(),
    validate(schoolValidation.getSchoolList),
    schoolController.getSchoolList
  );

  /** Delete school */
router.delete(
  "/delete-school/:schoolId",
  // auth(),
  validate(schoolValidation.getDetails),
  schoolController.deleteSchool
);

/** update school */
router.put(
  "/update-school/:schoolId",
  // auth(),
  validate(schoolValidation.updateDetails),
  schoolController.updateDetails
)

module.exports = router;