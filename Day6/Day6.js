// 6. Problem: Express Route Handling

// Problem Statement: You are building a web application using
// Express in Node.js. Create an Express route to handle GET requests
// to the endpoint "/greet" that takes a query parameter "name" and
// returns a personalized greeting. If the name parameter is not
// provided, the default greeting should be "Hello, Guest!".

// Solution:

const express = require('express');
const app = express();

/**
 * Handles GET requests to "/greet" endpoint
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function greetHandler(req, res) {
    // Your implementation here
    const name = req.query.name || 'Guest';
    res.send(`Hello, ${name}!`);
}

app.get('/greet', greetHandler);

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

// Test Cases
// 1. Request to /greet?name=John should return "Hello, John!"
// 2. Request to /greet should return "Hello, Guest!"