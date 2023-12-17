const jwt = require('jsonwebtoken');

// Middleware for authentication
function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).send('Unauthorized');

  jwt.verify(token, 'your_secret_key', (err, user) => {
    if (err) return res.status(403).send('Forbidden');
    req.user = user;
    next();
  });
}

// Example route with authentication middleware
app.get('/protected', authenticateToken, (req, res) => {
  // This route is protected, and only authenticated users can access it
  res.send('Protected route');
});
