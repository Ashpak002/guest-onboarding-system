const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');
const QRCode = require('qrcode');
const authMiddleware = require('../middlewares/authMiddleware');

// Add Hotel (Main Admin only)
router.post('/', authMiddleware('main-admin'), async (req, res) => {
    try {
        const { name, address, logo } = req.body;
        const hotel = new Hotel({ name, address, logo });
        await hotel.save();
        const qrCode = await QRCode.toDataURL(`http://localhost:3000/guest/${hotel._id}`);
        hotel.qrCode = qrCode;
        await hotel.save();
        res.status(201).json(hotel);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get QR Code
router.get('/:hotelId/qr', authMiddleware('guest-admin'), async (req, res) => {
    try {
        const { hotelId } = req.params;
        const hotel = await Hotel.findById(hotelId);
        if (!hotel) return res.status(404).json({ message: 'Hotel not found' });
        res.status(200).json({ qrCode: hotel.qrCode });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
