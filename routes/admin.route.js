const { Router } = require("express");
const controller = require("../controller");
const { checkAccessToken } = require("../middleware/auth");
const { checkRole } = require("../middleware/check-role");
const validator = require("../validators");
const genericResponse = require("../helper/generic-response.helper");
const serialization = require("../serialization");
const router = Router();

router.post(
  "/email-file",
  checkAccessToken,
  checkRole,
  validator.userValidator.emailFileSchema,
  controller.User.emailFile,
  genericResponse.sendResponse
);

router.get(
  "/get-email-data/:email",
  checkAccessToken,
  checkRole,
  validator.userValidator.mailParse,
  controller.User.mailParse,
  genericResponse.sendResponse
);
router.get(
  "/get-data",
  checkAccessToken,
  checkRole,
  controller.User.getData,
  genericResponse.sendResponse
);
router.post(
  "/create-user",
  checkAccessToken,
  checkRole,
  controller.User.createUser,
  serialization.userSerialization.createUser,
  genericResponse.sendResponse
);

router.delete(
  "deactivate-user",
  checkAccessToken,
  checkRole,
  controller.User.deactivateUser,
  genericResponse.sendResponse
);
router.get(
  "/user-details/:id",
  checkAccessToken,
  checkRole,
  controller.User.detailById,
  serialization.userSerialization.userDetail,
  genericResponse.sendResponse
);
router.post(
  "/data",
  checkAccessToken,
  checkRole,
  controller.Map.main,
  genericResponse.sendResponse
);

router.get(
  "/get-all-data",
  checkAccessToken,
  controller.Product.getAllData,
  genericResponse.sendResponse
);

router.put(
  "/add-data",
  checkAccessToken,
  checkRole,
  validator.ProductValidator.addData,
  controller.Product.addData,
  genericResponse.sendResponse
);

router.delete(
  "/deactivate-product",
  checkAccessToken,
  checkRole,
  validator.ProductValidator.deactivateProduct,
  controller.Product.deactivateProduct,
  genericResponse.sendResponse
);

router.patch(
  "/enable-product",
  checkAccessToken,
  checkRole,
  validator.ProductValidator.enableProduct,
  controller.Product.enableProduct,
  genericResponse.sendResponse
);

module.exports = router;
