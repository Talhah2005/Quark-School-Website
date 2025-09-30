const router = require('express').Router();

// Debug route to test server connection
router.get('/test', (req, res) => {
  res.json({ 
    message: 'Server is working!', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Debug route to test Instagram token
router.get('/instagram-token', (req, res) => {
  const token = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
  res.json({
    hasToken: !!token,
    tokenLength: token ? token.length : 0,
    tokenPrefix: token ? token.substring(0, 10) + '...' : 'No token'
  });
});

module.exports = router;