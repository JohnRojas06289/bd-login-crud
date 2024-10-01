const Inmueble = require('../models/inmuebleModel');

const inmuebleController = {
  create: (req, res) => {
    const { Tipo_inmueble, Superficie_m2, Direccion, Propietario, Precio_alquiler, Fianza, Precio_venta, Hipotecado } = req.body;
    const data = [Tipo_inmueble, Superficie_m2, Direccion, Propietario, Precio_alquiler, Fianza, Precio_venta, Hipotecado];

    Inmueble.create(data, (err, result) => {
      if (err) return res.status(500).send('Error al crear el inmueble');
      res.send('Inmueble creado correctamente');
    });
  },

  findAll: (req, res) => {
    Inmueble.findAll((err, result) => {
      if (err) return res.status(500).send('Error al obtener los inmuebles');
      res.json(result);
    });
  },

  update: (req, res) => {
    const { id } = req.params;
    const { Tipo_inmueble, Superficie_m2, Direccion, Propietario, Precio_alquiler, Fianza, Precio_venta, Hipotecado } = req.body;
    const data = [Tipo_inmueble, Superficie_m2, Direccion, Propietario, Precio_alquiler, Fianza, Precio_venta, Hipotecado];

    Inmueble.update(id, data, (err, result) => {
      if (err) return res.status(500).send('Error al actualizar el inmueble');
      res.send('Inmueble actualizado correctamente');
    });
  },

  delete: (req, res) => {
    const { id } = req.params;

    Inmueble.delete(id, (err, result) => {
      if (err) return res.status(500).send('Error al eliminar el inmueble');
      res.send('Inmueble eliminado correctamente');
    });
  }
};

module.exports = inmuebleController;