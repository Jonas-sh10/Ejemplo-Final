const mongoose = require('mongoose');

const estudianteSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  universidad: String,
  carrera: String,
  anio_egreso: Number,
  habilidades: [String],
  experiencia_laboral: [{
    nombreTrabajo: String,
    periodo: String,
    empresa: String,
  }],
  proyectos: [{
    nombre: String,
    descripcion: String,
    tecnologias: [String],
  }],
  // Otros campos del estudiante
});

const Estudiante = mongoose.model('Estudiante', estudianteSchema);

module.exports = Estudiante;
