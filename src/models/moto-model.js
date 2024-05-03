const mongoose = require('mongoose');

const motoSchema = mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    }, 
    image: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    engineType: {
        type: String,
        required: true
    },
    horsepower: {
        type: Number,
        required: true
    },
    torque: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    topSpeed: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

// Define setImgUrl method on the schema
motoSchema.methods.setImgUrl = function setImgUrl(filename) {
    this.image = `public/${filename}`;
};

module.exports = mongoose.model('Moto', motoSchema)