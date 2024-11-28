const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const corsMiddleware = require('./utils/corsMiddleware')

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(corsMiddleware); // Use the custom CORS middleware


// Routes
const userRoutes = require('./routes/userRoutes');
const bikeRoutes = require('./routes/bikeRoutes')
app.use('/api/users', userRoutes);
app.use('/api/bikes', bikeRoutes);

// Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
