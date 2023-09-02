const express = require("express");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** create user */
router.post(
  "/create-user",
  auth(),
  validate(userValidation.createUser),
  userController.createUser
);

/** Get user list */
router.get(
  "/list",
  auth(),
  validate(userValidation.getUserList),
  userController.getUserList
);

/** user details update by id */
router.put(
  "/update-user/:userId",
  auth(),
  validate(userValidation.updateDetails),
  userController.updateDetails
);

/** Delete user */
router.delete(
  "/delete-user/:userId",
  auth(),
  validate(userValidation.getDetails),
  userController.deleteUser
);

module.exports = router;
