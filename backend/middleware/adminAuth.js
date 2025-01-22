import jwt from 'jsonwebtoken';

const adminAuth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Check if token is provided in the Authorization header
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Unauthorized: Token missing or malformed" });
    }

    const token = authHeader.split(" ")[1]; // Extract the token from "Bearer <token>"
    
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if the decoded token matches the admin credentials
    if (
      decoded.email !== process.env.ADMIN_EMAIL ||
      decoded.passwordHash !== process.env.ADMIN_PASSWORD_HASH // Store a hashed password for comparison
    ) {
      return res.status(403).json({ message: "Forbidden: Invalid admin credentials" });
    }

    // Attach admin details to the request object for further use
    req.admin = { email: decoded.email };

    next(); // Proceed to the next middleware or route handler
  } catch (error) {
    console.error("Admin auth error:", error);
    return res.status(401).json({ message: "Unauthorized: Invalid or expired token" });
  }
};

export default adminAuth;
