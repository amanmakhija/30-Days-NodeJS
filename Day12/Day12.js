// 12. Problem: Express Rate Limiting

// Problem Statement: Implement a rate-limiting middleware for an Express
// application. The middleware should limit the number of requests from a
// single IP address to a specified rate, and return a 429 Too Many Requests
// status if the limit is exceeded.

const express = require('express');
const rateLimit = require('express-rate-limit');
const app = express();
const port = 3000;

/**
 * Rate-limiting middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */

const rateLimitMiddleware = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 2,
    message: 'Too many requests from this IP, please try again later.'
});

app.use(rateLimitMiddleware);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Home Page.' })
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Test Cases:

// 1. Send requests within the limit; all should proceed.
// 2. Send requests exceeding the limit; some should return a 429 status.