const express = require('express');
const { schoolValidation } = require('../../validations');
const { schoolController } = require('../../controllers');
const validate = require('../../middlewares/validate');

const router = express.Router();

/** create school */
router.post(
    "/create-school",
    validate(schoolValidation.createSchool),
    schoolController.createSchool
  );

  /** Get school list */
  router.get(
    "/list",
    validate(schoolValidation.getSchoolList),
    schoolController.getSchoolList
  );

  /** Delete school */
router.delete(
  "/delete-school/:schoolId",
  validate(schoolValidation.getDetails),
  schoolController.deleteSchool
);

/** update school */
router.put(
  "/update-school/:schoolId",
  validate(schoolValidation.updateDetails),
  schoolController.updateDetails
)

module.exports = router;