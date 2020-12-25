const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");

const router = express.Router();

const razorpayConfig = {
  key_id: "rzp_test_jG7kHH2emV2Ihi",
  key_secret: "HpJf085GPBhppYmCmB68a32b",
};

const instance = new Razorpay(razorpayConfig);

router.post("/", (req, res, next) => {
  var options = {
    amount: req.body.finalAmt * 100,
    currency: "INR",
    receipt: "",
    payment_capture: 1,
  };

  instance.orders.create(options, function (err, order) {
    if (err) {
      res.send(err);
    } else {
      res.send(order);
    }
  });
});

router.post('/capturePayment', (req, res, next) => {

    instance.payments.capture(req.body.id, parseInt(req.body.amount))
        .then(function (response) {
            res.send({
                result : 1
            });
        })
        .catch(function (err) {
            res.send(err);
        });

});

module.exports = router;
