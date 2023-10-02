const mongoose = require('mongoose');

const userWithLocation = new mongoose.Schema({
    username: String,
    locations: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Location' }]
});

module.exports = mongoose.model('UserWithLocation', userWithLocation);
