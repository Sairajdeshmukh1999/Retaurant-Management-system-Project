const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const Razorpay = require("razorpay");
var instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY,
  key_secret: process.env.RAZORPAY_SECRET,
});

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  try {
    var options = {
      amount: req.body.amount, // amount in the smallest currency unit
      currency: "INR",
      receipt: req.body.receipt,
    };
    instance.orders.create(options, function (err, order) {
      res.status(200).json({ success: true, client_secret: order });
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

exports.razorPayapikey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ razorPayApiKey: process.env.RAZORPAY_KEY });
});
