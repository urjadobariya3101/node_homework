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

  /** Delete book */
router.delete(
  "/delete-school/:schoolId",
  validate(schoolValidation.getDetails),
  schoolController.deleteSchool
);

module.exports = router;