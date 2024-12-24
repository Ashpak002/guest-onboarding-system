const mongoose = require('mongoose');

const GuestSchema = new mongoose.Schema({
    hotelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel' },
    fullName: { type: String, required: true },
    mobile: { type: String, required: true },
    address: { type: String, required: true },
    purpose: { type: String, required: true },
    stayFrom: { type: Date, required: true },
    stayTo: { type: Date, required: true },
    email: { type: String, required: true },
    idProof: { type: String, required: true },
});

module.exports = mongoose.model('Guest', GuestSchema);
