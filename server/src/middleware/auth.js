//server/middleware/auth.js
const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  try {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET not found in environment variables');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = payload;
    next();
  } catch (e) {
    console.error('Auth middleware error:', e.message);
    return res.status(401).json({ error: 'Invalid token' });
  }
}

function requireAdmin(req, res, next) {
  if (req.user?.role !== 'admin') {
    return res.status(403).json({ error: 'Admin access required' });
  }
  next();
}

module.exports = { auth, requireAdmin };