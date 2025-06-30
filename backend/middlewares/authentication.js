// const jwt = require("jsonwebtoken")

// function verifyAccessToken(req, res, next) {
//     try {
//         if(req.headers.authorization == null) {
//             throw "invalid access"
//         }
//         const verifiedData = jwt.verify(req.headers.authorization, process.env.SECRET)
//         console.log("verify : ", verifiedData)

//         req.userEmail = verifiedData.email 
//         req.userRole = verifiedData.role
//         req.userId = verifiedData._id
//     } catch (error) {
//         return res.status(403).json({
//             message: "authentication failed",
//             error: "invalid access",
//             data: null
//          })
//     }
//     next()
// }

// function checkIsPatient(req, res, next) {
//     try {
//         if(req.userRole != "patient") {
//             throw "only patient can create appointment"
//         }
//     } catch (error) {
//         return res.status(422).json({
//             message: "unauthorized access",
//             error: error,
//             data: null
//          })
//     }
//    next()
// }

// function checkIsDoctor(req, res, next) {
//     try {
//         if(req.userRole != "doctor") {
//             throw "only doctor can update appointment"
//         }
//     } catch (error) {
//         return res.status(422).json({
//             message: "unauthorized access",
//             error: error,
//             data: null
//          })
//     }
//    next()
// }

// module.exports = {
//     verifyAccessToken,
//     checkIsPatient,
//     checkIsDoctor
// }

const jwt = require("jsonwebtoken");

function verifyAccessToken(req, res, next) {
  try {
    const token = req.headers.authorization;
    if (!token) throw "Token missing";

    const verified = jwt.verify(token, process.env.SECRET);
    req.userEmail = verified.email;
    req.userRole = verified.role;
    req.userId = verified._id;

    next();
  } catch (err) {
    return res.status(403).json({
      message: "Authentication failed",
      error: "Invalid or missing token",
      data: null
    });
  }
}

function checkIsPatient(req, res, next) {
  if (req.userRole !== "patient") {
    return res.status(422).json({
      message: "Only patient can access this route",
      error: "Unauthorized",
      data: null
    });
  }
  next();
}

function checkIsDoctor(req, res, next) {
  if (req.userRole !== "doctor") {
    return res.status(422).json({
      message: "Only doctor can access this route",
      error: "Unauthorized",
      data: null
    });
  }
  next();
}

module.exports = {
  verifyAccessToken,
  checkIsPatient,
  checkIsDoctor
};
