const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema(
    {
        username: String,
        accuracy: Number,
        heading: Number,
        latitude: Number,
        longitude: Number,
        speed: Number,
        timestamp: Number
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Location', locationSchema);
