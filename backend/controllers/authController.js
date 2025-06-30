const User = require('../models/user');
const Otp = require('../models/EmailOtpVerification');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { sendMail } = require('../../helper');

// ✅ STEP 1: Send OTP & store temporary user data
const signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate OTP
    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    console.log("OTP:", otpCode);

    console.log("Saving OTP:", { email, otpCode, hashedPassword, role, name });
    // Store OTP and temp user details in Otp collection
    await Otp.findOneAndUpdate( 
      
      { email },
      { email, otp: otpCode, hashedPassword, role, name },
      { upsert: true, new: true }
    );

    // Send OTP to email
    await sendMail(email, 'MediLink OTP', `Your OTP is ${otpCode}`);

    return res.status(200).json({ message: 'OTP sent to email' });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ error: 'Signup failed', details: error });
  }
};

// ✅ STEP 2: Verify OTP and Create User + Generate JWT Token
const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Find OTP doc
    const otpDoc = await Otp.findOne({ email });
    if (!otpDoc || otpDoc.otp !== otp) {
      return res.status(400).json({ error: 'Invalid OTP' });
    }

    // Create the new user
    const newUser = await User.create({
      name: otpDoc.name,
      email,
      password: otpDoc.hashedPassword,
      role: otpDoc.role,
      verifiedEmail: true,
      hashedPassword: otpDoc.hashedPassword // ⬅️ Storing hashed password
      // profile
    });

    // Delete OTP record
    await Otp.deleteOne({ email });

    // Generate JWT token
    const payload = {
      email: newUser.email,
      hashedPassword: newUser.password, //added by me
      role: newUser.role,
      _id: newUser._id
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: '1h'
    });

    const userData = { ...newUser._doc };
    delete userData.password;

    return res.status(201).json({
      message: 'User created and verified',
      data: {
        ...userData,
        accessToken: token
      },
      error: null
    });
  } catch (error) {
    console.error("OTP verification error:", error);
    return res.status(500).json({ error: 'Verification failed', details: error });
  }
};

// ✅ Login: Validate credentials and return a new JWT
const login = async (req, res) => {
  const { email, password, role } = req.body;
  let foundUser = null;

  try {
    foundUser = await User.findOne({ email, role });

    if (!foundUser) {
      throw new Error('User not found');
    }

    if (!foundUser.verifiedEmail) {
      throw new Error('Please verify your email before logging in');
    }

    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) {
      throw new Error('Invalid password');
    }

    // Generate new token
    const payload = {
      email: foundUser.email,
      hashedPassword: foundUser.password, //added by me
      role: foundUser.role,
      _id: foundUser._id
    };

    const token = jwt.sign(payload, process.env.SECRET_KEY, {
      expiresIn: '1h'
    });

    const userData = { ...foundUser._doc };
    delete userData.password;

    return res.status(200).json({
      message: 'Login successful',
      error: null,
      data: {
        ...userData,
        accessToken: token
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(403).json({
      message: 'Login failed',
      error: error.message,
      data: null
    });
  }
};

// ✅ Logout (Stateless — no token storage)
const logout = async (req, res) => {
  try {
    return res.status(200).json({
      message: 'Logout successful',
      error: null,
      data: null
    });
  } catch (error) {
    return res.status(403).json({
      message: 'Logout failed',
      error: error.message,
      data: null
    });
  }
};

module.exports = {
  signup,
  verifyOtp,
  login,
  logout
};
