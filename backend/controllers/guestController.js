const Guest = require('../models/Guest');

exports.addGuest = async (req, res) => {
    try {
        const guestData = req.body;
        const guest = new Guest(guestData);
        await guest.save();
        res.status(201).json(guest);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllGuests = async (req, res) => {
    try {
        const { hotelId } = req.query; // Optional filtering by hotelId
        const filter = hotelId ? { hotelId } : {};
        const guests = await Guest.find(filter).populate('hotelId', 'name address');
        res.status(200).json(guests);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
