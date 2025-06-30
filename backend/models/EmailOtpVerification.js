// const mongoose = require("mongoose");

// const OtpSchema = new mongoose.Schema({
//   email: { type: String, required: true },
//   otp: { type: String, required: true },
//   createdAt: { type: Date, default: Date.now, expires: 300 } // expires in 5 minutes
// });

// // ✅ Prevent OverwriteModelError:
// const OtpModel = mongoose.models.OtpModel || mongoose.model("OtpModel", OtpSchema);

// module.exports = OtpModel;
const mongoose = require('mongoose');

const emailOtpVerificationSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  otp: {
    type: String,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  role: {
    type: String
  }
}, { timestamps: true });

const Otp = mongoose.models.Otp || mongoose.model('Otp', emailOtpVerificationSchema);
module.exports = Otp;
