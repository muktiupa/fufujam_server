const express = require('express');
const upload = require('../utils/multer'); // Correct multer import
const { addBike, getAllBikes } = require('../controllers/bikeController'); // Add controllers
const { verifyToken } = require('../utils/authMiddleware'); // Import verifyToken middleware

const router = express.Router();

/**
 * @route POST /api/bikes/add
 * @description Add a new bike (Protected route)
 * @access Private
 */
router.post('/add', verifyToken, upload.array('images', 2), addBike);

/**
 * @route GET /api/bikes/allbike
 * @description Get all bikes (Protected route)
 * @access Private
 */
router.get('/allbike', verifyToken, getAllBikes);

module.exports = router;
