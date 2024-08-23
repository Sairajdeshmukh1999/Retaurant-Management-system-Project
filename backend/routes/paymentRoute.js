const express = require("express");
const {
  processPayment,
  razorPayapikey,
} = require("../controllers/paymentController");
const router = express.Router();
const { isAuthenticatedUser } = require("../middleware/auth");

router.route("/payment/process").post(isAuthenticatedUser, processPayment);

router.route("/razorPayapikey").get(isAuthenticatedUser, razorPayapikey);

module.exports = router;
