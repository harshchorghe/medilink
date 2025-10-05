const jwt = require("jsonwebtoken");

function verifyAccessToken(req, res, next) {
  try {
    const authHeader = req.headers.authorization || "";
    let token = authHeader;
    if (authHeader.startsWith("Bearer ")) {
      token = authHeader.substring("Bearer ".length).trim();
    }

    if (!token) {
      if (process.env.NODE_ENV !== "production") {
        const mockEmail = req.headers["x-dev-user-email"]; // e.g., doctor@example.com
        const mockRole = req.headers["x-dev-user-role"];   // e.g., doctor | patient
        const mockId = req.headers["x-dev-user-id"];       // optional
        if (mockEmail && mockRole) {
          req.userEmail = mockEmail;
          req.userRole = mockRole;
          req.userId = mockId || undefined;
          return next();
        }
      }
      throw new Error("Token missing");
    }

    const verified = jwt.verify(token, process.env.SECRET || 'dev-secret');
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
