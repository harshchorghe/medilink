const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    email: {
        type: String, 
        unique: true,
        required: true
    },
    otp: {
        type: String, 
    }
})

module.exports = mongoose.models.EmailOTP || mongoose.model("EmailOTP", schema);
