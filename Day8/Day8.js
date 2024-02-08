// 8. Problem: Express Error Handling

// Problem Statement: Create an Express route that throws
// an error if the request parameter "number" is not a positive
// integer. Implement an error handling middleware to catch and
// handle this specific error, returning a custom error message
// and a 400 Bad Request status.

const express = require('express');
const app = express();
const port = 3000;

/**
 * Express route to handle requests with a positive integer parameter
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function positiveIntegerHandler(req, res) {
    // Your implementation here
    const number = req.query.number;
    if (number && number > 0 && Number.isInteger(Number(number))) {
        res.send('Number is positive integer');
    } else {
        throw new Error('Number is not a positive integer');
    }
}

function errorHandler(err, req, res, next) {
    if (err.message === 'Number is not a positive integer') {
        res.status(400).send('Number is not a positive integer');
    } else {
        next(err);
    }
}

app.use(errorHandler);

app.get('/positive', positiveIntegerHandler);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

// Test Cases:

// 1. Request to /positive?number=5 should return a success
// message.

// 2. Request to /positive?number=-2 should trigger the error
// handling middleware.