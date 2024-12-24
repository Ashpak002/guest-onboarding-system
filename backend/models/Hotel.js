const mongoose = require('mongoose');

const HotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    logo: { type: String, required: true },
    qrCode: { type: String },
});

module.exports = mongoose.model('Hotel', HotelSchema);
