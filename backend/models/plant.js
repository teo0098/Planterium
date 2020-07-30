const { Schema, model } = require('mongoose');

const plantSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    desc: {
        type: String,
        required: true,
        trim: true
    },
    watering: {
        type: Number,
        required: true
    },
    light: {
        type: String,
        required: true,
        trim: true
    }
});

const Plant = model('plant', plantSchema);

module.exports = Plant;