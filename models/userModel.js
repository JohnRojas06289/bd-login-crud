const db = require('../conection');

const User = {
  create: (username, hashedPassword, callback) => {
    const sql = 'INSERT INTO usuarios (username, password) VALUES (?, ?)';
    db.query(sql, [username, hashedPassword], callback);
  },
  findByUsername: (username, callback) => {
    const sql = 'SELECT * FROM usuarios WHERE username = ?';
    db.query(sql, [username], callback);
  }
};

module.exports = User;