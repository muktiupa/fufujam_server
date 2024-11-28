const Bike = require('../models/Bike');

// Add a new bike
exports.addBike = async (req, res) => {
    try {
        const { name, brand, model, description } = req.body;

        if (!name || !brand || !model) {
            return res.status(400).json({ message: 'Name, brand, and model are required.' });
        }

        if (!req.files || req.files.length < 2) {
            return res.status(400).json({ message: 'At least 2 images are required.' });
        }

        const images = req.files.map((file) => file.path);

        const bike = new Bike({ name, brand, model, description, images });
        await bike.save();

        res.status(201).json({ message: 'Bike added successfully.', bike });
    } catch (error) {
        console.error('Error adding bike:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

// Get all bikes
exports.getAllBikes = async (req, res) => {
    try {
        const bikes = await Bike.find(); // Fetch all bikes
        res.status(200).json(bikes);
    } catch (error) {
        console.error('Error fetching bikes:', error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
