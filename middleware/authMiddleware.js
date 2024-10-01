const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Token requerido');

  jwt.verify(token, 'ContraseñaSegura123', (err, decoded) => {
    if (err) return res.status(403).send('Token inválido');
    req.userId = decoded.id;
    next();
  });
};

module.exports = authMiddleware;