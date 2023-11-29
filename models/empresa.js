const mongoose = require('mongoose');

const empresaSchema = new mongoose.Schema({
  nombre: String,
  sector: String,
  empleados: Number,
  ubicacion: String,
  vacantes: Number,
});

// Si tu colección en MongoDB se llama 'empresa' (en minúsculas)
const Empresa = mongoose.model('empresa', empresaSchema, 'empresa');

module.exports = Empresa;
