const cors = require('cors');

const allowedOrigins = ['http://localhost:3000', 'https://example.com'];

const corsMiddleware = cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true, // Allow credentials like cookies or auth headers
});

module.exports = corsMiddleware;
