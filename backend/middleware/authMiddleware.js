const jwt = require("jsonwebtoken")

const User = require("../models/User")

// Middleware to protect routes
const protect = async (req, res, next) => {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
         console.log("Token from header:", token);
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded payload:", decoded);
        req.user = await User.findById(decoded.user.id).select("-password");
        next();
      } catch (error) {
        console.error("Token verifcation failed", error);
        res.status(401).json({ message: "Not authorized, token failed" });
      }
    } else {
      res.status(401).json({ message: "Not authorized, no token provided" });
    }
};

// Middleware to check if the user is an admin
const admin = async (req, res, next) => {
    if (req.user && req.user.role === "admin") {
      next();
    } else {
      res.status(403).json({ message: "Not authorized, admin only" });
    }
}

module.exports = { protect, admin };