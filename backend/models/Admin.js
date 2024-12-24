const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, enum: ['main-admin', 'guest-admin'] },
});

module.exports = mongoose.model('Admin', AdminSchema);
