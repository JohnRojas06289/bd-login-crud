const db = require('../conection');

const Inmueble = {
  create: (data, callback) => {
    const sql = `INSERT INTO inmuebles 
      (Tipo_inmueble, Superficie_m2, Direccion, Propietario, Precio_alquiler, Fianza, Precio_venta, Hipotecado) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    db.query(sql, data, callback);
  },
  findAll: (callback) => {
    const sql = 'SELECT * FROM inmuebles';
    db.query(sql, callback);
  },
  findById: (id, callback) => {
    const sql = 'SELECT * FROM inmuebles WHERE ID_inmueble = ?';
    db.query(sql, [id], callback);
  },
  update: (id, data, callback) => {
    const sql = `UPDATE inmuebles 
      SET Tipo_inmueble = ?, Superficie_m2 = ?, Direccion = ?, Propietario = ?, 
      Precio_alquiler = ?, Fianza = ?, Precio_venta = ?, Hipotecado = ? 
      WHERE ID_inmueble = ?`;
    db.query(sql, [...data, id], callback);
  },
  delete: (id, callback) => {
    const sql = 'DELETE FROM inmuebles WHERE ID_inmueble = ?';
    db.query(sql, [id], callback);
  }
};

module.exports = Inmueble;