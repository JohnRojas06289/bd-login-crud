const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authController = {
  register: (req, res) => {
    const { username, password } = req.body;
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);
    
    User.create(username, hashedPassword, (err, result) => {
      if (err) return res.status(500).send('Error al registrar el usuario');
      res.send('Usuario registrado correctamente');
    });
  },

  login: (req, res) => {
    const { username, password } = req.body;

    User.findByUsername(username, (err, result) => {
      if (err || result.length === 0) {
        return res.status(401).send('Usuario no encontrado');
      }

      const user = result[0];
      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).send('Contraseña incorrecta');
      }

      const token = jwt.sign({ id: user.id }, 'ContraseñaSegura123', { expiresIn: '1h' });
      res.json({ token });
    });
  }
};

module.exports = authController;
