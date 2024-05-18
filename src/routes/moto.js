const express = require('express');
const motoSchema = require('../models/moto-model');
const router = express.Router();
const upload = require('../libs/storage');

// CREAR MOTO
router.post('/moto', upload.single('image'), (req, res) => {
    const moto = new motoSchema(req.body);
    if (req.file) {
        const { filename } = req.file;
        moto.setImgUrl(filename);
    }
    moto.save()
        .then((data) => {
            res.json({ message: 'Moto Creada', data: data });
        })
        .catch((error) => res.json({ message: error }));
});

// LISTAR TODAS LAS MOTOS
router.get('/moto', (req, res) => {
    motoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// ACTUALIZAR MOTO POR ID
router.put('/moto/:id', upload.single('image'), (req, res) => {
    console.log('PUT /moto/:id hit');
    const { id } = req.params;
    const { brand, model, image, year, engineType, horsepower, torque, weight, topSpeed, color, price } = req.body;

    motoSchema
        .findOneAndUpdate(
            { _id: id },
            { brand, model, image, year, engineType, horsepower, torque, weight, topSpeed, color, price },
            { new: true }
        )
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

// BORRAR MOTO POR ID
router.delete('/moto/:id', (req, res) => {
    const { id } = req.params;
    motoSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }))
});

module.exports = router;