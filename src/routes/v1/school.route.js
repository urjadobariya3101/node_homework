const express = require('express');
const { schoolValidation } = require('../../validations');
const { schoolController } = require('../../controllers');
const validate = require('../../middlewares/validate');
const auth = require("../../middlewares/auth");

const router = express.Router();

/** create school */
router.post(
    "/create-school",
    validate(schoolValidation.createSchool),
    auth(),
    schoolController.createSchool
  );

  /** Get school list */
  router.get(
    "/list",
    validate(schoolValidation.getSchoolList),
    auth(),
    schoolController.getSchoolList
  );

  /** Delete school */
router.delete(
  "/delete-school/:schoolId",
  validate(schoolValidation.getDetails),
  auth(),
  schoolController.deleteSchool
);

/** update school */
router.put(
  "/update-school/:schoolId",
  validate(schoolValidation.updateDetails),
  auth(),
  schoolController.updateDetails
)

module.exports = router;