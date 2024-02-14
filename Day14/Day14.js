// 14. Problem: Express Caching Middleware

// Problem Statement: Implement a caching middleware for an
// Express application. The middleware should cache responses
// based on the request URL and return cached responses for
// subsequent identical requests. Allow cache expiration after
// a specified time.

// Solution:

const express = require('express');
const app = express();
const port = 3000;

const cache = {}; // Object to store cached responses

/**
 * Caching middleware for Express
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
function cachingMiddleware(req, res, next) {
    // Your implementation here
    const { url } = req;
    const cachedResponse = cache[url];

    if (cachedResponse && Date.now() < cachedResponse.expirationTime) {
        // If cached response exists and not expired, return cached response
        res.send(cachedResponse.data);
    } else {
        // Store the response in cache
        const originalSend = res.send;
        res.send = (body) => {
            cache[url] = {
                data: body,
                expirationTime: Date.now() + (10 * 1000), // Cache expiration time (e.g., 10 seconds)
            };
            originalSend.call(res, body);
        };
        next();
    }
}

app.use(cachingMiddleware);

app.get('/data', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

// Expected Output:

// 1. Cached responses should be returned for identical requests
// within the cache expiration time.
// 2. Subsequent requests after cache expiration should trigger a
// new response.

// Test Cases:

// 1. Make a request, cache the response, and make the same request
// again within the cache expiration time.
// 2. Make a request, cache the response, wait for cache expiration,
// and make the same request again.