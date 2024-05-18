const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const rutasMoto = require('./routes/moto');

const app = express();
const path = require('path'); //para servir archivos estáticos
const port = process.env.PORT || 9000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', rutasMoto);

// Servimos archivos estáticos desde la carpeta public :) 
app.use(express.static(path.join(__dirname, '..', 'public')));

// Definimos la ruta URL ("/") [raiz] y mostramos index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'html', 'index.html'));
});

// Routes
app.get("/moto", (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'html', 'motos.html'));
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to Database :)'))
    .catch((error) => console.error(error));

// Start the server
app.listen(port, () => console.log('Server listening at port:', port));
