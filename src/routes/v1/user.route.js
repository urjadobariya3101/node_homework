const express = require("express");
const { userValidation } = require("../../validations");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth");

const router = express.Router();

/** create user */
router.post(
  "/create-user",
  validate(userValidation.createUser),
  auth(),
  userController.createUser
);

/** Get user list */
router.get(
  "/list",
  validate(userValidation.getUserList),
  auth(),
  userController.getUserList
);

/** user details update by id */
router.put(
  "/update-user/:userId",
  validate(userValidation.updateDetails),
  auth(),
  userController.updateDetails
);

/** Delete user */
router.delete(
  "/delete-user/:userId",
  validate(userValidation.getDetails),
  auth(),
  userController.deleteUser
);

module.exports = router;
