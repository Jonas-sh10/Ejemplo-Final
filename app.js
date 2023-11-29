const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors'); // Agregado para manejar CORS
const Empresa = require('./models/empresa');

const app = express();

// Conexión a MongoDB (asegúrate de tener el archivo db.js)
require('./db');

// Configuración de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Middleware para manejar CORS
app.use(cors());

// Ruta para renderizar el index.ejs
app.get('/', async (req, res) => {
    try {
      console.log('Antes de obtener datos de la colección empresa');
      const empresas = await Empresa.find({});
      console.log('Después de obtener datos de la colección empresa:', empresas);
  
      res.render('index', { empresas });
    } catch (error) {
      console.error('Error al obtener datos de la colección empresa:', error);
      res.status(500).send({ mensaje: 'Error al obtener datos de la colección empresa.', error: error.message });
    }
  });
  

app.listen(3000, () => {
  console.log('Servidor escuchando en http://localhost:3000');
});
