const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    model: { type: String, required: true },
    description: { type: String },
    images: { type: [String], required: true }, // Array for image file paths
}, { timestamps: true });

module.exports = mongoose.model('Bike', bikeSchema);
