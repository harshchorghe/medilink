// const Router = require("express").Router()
// const bcrypt = require("bcrypt")
// const jwt = require("jsonwebtoken")
// const User = require("../models/user")
// // const OtpModel = require("../models/EmailOtpVerification")
// const { verifyAccessToken } = require("../middlewares/authentication")
// const { sendMail } = require("../helper")


// Router.post("/signup", (req, res) => {
//     const newUser = req.body

//     return User.create(newUser)
//     .then(doc => {

//         delete doc._doc.password
//         return res.status(201).json({
//             message: "signup successful",
//             error: null,
//             data: doc
//          })
//     })
//     .catch(error => {
//         return res.status(422).json({
//             message: "signup failed",
//             error: error,
//             data: null
//          })
//     })
// })

// Router.post("/login", (req, res) => {
//     const { email, password, role } = req.body
//     let foundDoc = null

//     return User.findOne({ email, role })
//     .then(doc => {
//         foundDoc = doc

//         if (doc == null) {
//             throw "user not found"
//         }

//         return bcrypt.compare(password, doc.password)
//     })
//     .then((isCompared) => {
//         if(!isCompared) {
//             throw "invalid password"
//         }

//         const payload = {
//             email: foundDoc.email,
//             role: foundDoc.role,
//             _id: foundDoc._id
//         }

//         const token = jwt.sign(payload, process.env.SECRET, {
//             expiresIn: '1h'
//         })

//         delete foundDoc._doc.password

//         return res.status(200).json({
//             message: "login successful",
//             error: null,
//             data: {
//                 ...foundDoc._doc,
//                 accessToken: token
//             }
//          })
//     })
//     .catch(error => {
//         console.log(" error: ", error)

//         return res.status(403).json({
//             message: "login failed",
//             error: error,
//             data: null
//          })
//     })
// })

// Router.post("/logout", verifyAccessToken, (req, res) => {
//     try {
//         // TODO: write logout logic 

//         return res.status(200).json({
//             message: "logout successful",
//             error: null,
//             data: null
//          })
      
//     } catch (error) {
//         return res.status(403).json({
//             message: "logout failed",
//             error: error,
//             data: null
//          })
//     }
    
// })

// Router.get("/email-verify/request", verifyAccessToken, (req, res) => {

//     return User.findOne({ email: req.userEmail, role: req.userRole })
//     .then(doc => {
//         if(doc.verifiedEmail) {
//             throw "email already verified"
//         }

//         const newOtp = Math.ceil(Math.random() * 1000000)

//         return OtpModel.findOneAndUpdate({ email: req.userEmail }, { otp: newOtp }, { new: true })
//     })
//     .then(otpDoc => {

//         return sendMail(
//             req.userEmail, 
//             "MediLink: OTP for email verification",
//             "Your OTP is " + otpDoc.otp
//         )
//     })
//     .then(() => {
//         return res.status(200).json({
//             message: "verification request sent successful",
//             error: null,
//             data: null
//          })
//     })
//     .catch(error => {
//         console.log("error: ", error)
//         return res.status(403).json({
//             message: "verification request failed",
//             error: error,
//             data: null
//          })
//     })
// })

// Router.post("/email-verify/submit", verifyAccessToken, (req, res) => {
    
//     return User.findOne({ email: req.userEmail, role: req.userRole })
//     .then(doc => {
//         if(doc.verifiedEmail) {
//             throw "email already verified"
//         }

//         return OtpModel.findOne({ email: req.userEmail })
//     })
//     .then(otpDoc => {

//         if(otpDoc.otp != req.body.otp) {
//             throw "invalid otp"
//         }

//         return User.findOneAndUpdate({ email: req.userEmail, role: req.userRole }, { verifiedEmail: true }, { new: true })
//     })
//     .then(userDoc => {
//         delete userDoc._doc.password

//         return res.status(200).json({
//             message: "verification successful",
//             error: null,
//             data: userDoc
//          })
//     })
//     .catch(error => {
//         console.log("error: ", error)
//         return res.status(403).json({
//             message: "verification failed",
//             error: error,
//             data: null
//          })
//     })
// })


const Router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const { verifyAccessToken } = require("../middlewares/authentication");

// Signup without OTP
Router.post("/signup", async (req, res) => {
  const { name, email, password, role, gender, address, speciality } = req.body;

  try {
    if (!name || !email || !password || !role) {
      return res.status(400).json({
        message: "Missing required fields",
        error: "Invalid input",
        data: null
      });
    }

    const existingUser = await User.findOne({ email, role });
    if (existingUser) {
      return res.status(409).json({
        message: "Email already registered",
        error: "Conflict",
        data: null
      });
    }

    const newUser = new User({
      name,
      email,
      password,
      role,
      profile: {
        gender: role === "patient" ? gender : undefined,
        address: role === "patient" ? address : undefined,
        specialization: role === "doctor" ? speciality : undefined
      }
    });

    const doc = await newUser.save();
    const payload = { email: doc.email, role: doc.role, _id: doc._id };
    const token = jwt.sign(payload, process.env.SECRET || 'dev-secret', { expiresIn: "12h" });
    const userData = { ...doc._doc };
    delete userData.password;

    return res.status(201).json({
      message: "Signup successful",
      error: null,
      data: {
        ...userData,
        accessToken: token
      }
    });

  } catch (error) {
    console.error("Signup error:", error);
    return res.status(422).json({
      message: "Signup failed",
      error: error.message || error,
      data: null
    });
  }
});

// Login without OTP gate
Router.post("/login", async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const user = await User.findOne({ email, role });
    if (!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Invalid password");

    const payload = { email: user.email, role: user.role, _id: user._id };
    const token = jwt.sign(payload, process.env.SECRET || 'dev-secret', { expiresIn: "12h" });

    const userData = { ...user._doc };
    delete userData.password;

    return res.status(200).json({
      message: "Login successful",
      error: null,
      data: {
        ...userData,
        accessToken: token
      }
    });

  } catch (error) {
    console.error("Login error:", error);
    return res.status(403).json({
      message: "Login failed",
      error: error.message || error,
      data: null
    });
  }
});

// ✅ Logout Route
Router.post("/logout", verifyAccessToken, (req, res) => {
  try {
    // Token blacklist logic can go here (optional)
    return res.status(200).json({
      message: "Logout successful",
      error: null,
      data: null
    });
  } catch (error) {
    return res.status(403).json({
      message: "Logout failed",
      error: error.message || error,
      data: null
    });
  }
});

module.exports = Router;
