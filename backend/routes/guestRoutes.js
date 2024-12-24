const express = require('express');
const router = express.Router();
const guestController = require('../controllers/guestController');
const authMiddleware = require('../middlewares/authMiddleware');

// Add Guest
router.post('/', guestController.addGuest);

// Get All Guests (Guest Admin only)
router.get('/', authMiddleware('guest-admin'), guestController.getAllGuests);

module.exports = router;
