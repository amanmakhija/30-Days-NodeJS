// 15. Problem: Express Logging Middleware

// Problem Statement: Create a logging middleware for an Express
// application. The middleware should log detailed information
// about each incoming request, including the timestamp, HTTP
// method, URL, request headers, and request body.

// Solution:

const express = require('express');
const app = express();
const port = 3000;

/**
 * Logging middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function loggingMiddleware(req, res, next) {
    // Your implementation here
    console.log('Timestamp:', new Date().toISOString());
    console.log('HTTP Method:', req.method);
    console.log('URL:', req.url);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    next();
}

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(loggingMiddleware);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

// Expected Output:

// 1. Each incoming request should be logged with detailed information.

// Test Cases:

// 1. Make multiple requests and check the server logs for detailed
// information.

// Hint - To create a logging middleware for Express, you'll need
// to define a function that takes req, res, and next as parameters.
// Inside this function, use console.log to print the timestamp, HTTP
// method, URL, headers, and body of the incoming request. Finally, call
// next() to pass control to the next middleware.