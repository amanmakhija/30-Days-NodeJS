// 7. Problem: Express Middleware

// Problem Statement: Implement an Express middleware function that
// logs the timestamp and the HTTP method of every incoming request
// to the server.

const express = require('express');
const app = express();
const port = 3000;

/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function requestLoggerMiddleware(req, res, next) {
    // Your implementation here
    console.log(`${new Date().toISOString()} - ${req.method} 
    request received.`);
    next();
}

app.use(requestLoggerMiddleware);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

// Test Cases:

// Any incoming request should trigger the middleware and log the
// appropriate message.