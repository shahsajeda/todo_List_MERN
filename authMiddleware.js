// middleware/authMiddleware.js
const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.log('JWT Error:', err.message);
      return res.status(403).json({ message: 'Token invalid or expired' });
    }

    req.user = decoded;
    req.userId = decoded.userId; // ✅ FIX: Set userId for route access
    next();
  });
};

module.exports = authMiddleware;
