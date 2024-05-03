const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const rutasMoto = require('./routes/moto');

const app = express();
const port = process.env.PORT || 9000;

//MIDDLEWARE
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use('/api', rutasMoto);


// to serve static files

app.use('/public', express.static(`${__dirname}/public`))

//RUTAS
app.get("/", (req, res) => {
    res.send('Hola pep')
})

app.get("/moto", (req, res) => {
    res.send("Aquí hay motos")
})

//CONEXIÓN A MONGODB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to Database :)'))
    .catch((error) => console.error(error))

app.listen(port, () => console.log('Server listening at port: ', port));

