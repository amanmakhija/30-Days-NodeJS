// 13. Problem: Express WebSocket Integration

// Problem Statement: Extend an existing Express application to
// include WebSocket support. Create a WebSocket server that
// echoes back any message it receives from a client. Implement
// an endpoint "/websocket" that serves an HTML page with
// JavaScript to establish a WebSocket connection.

const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const path = require('path');

const app = express();
const server = http.createServer(app);
const port = 3000;

/**
 * WebSocket server for Express
 * @param {Object} server - HTTP server instance
 */
function setupWebSocket(server) {
    // Your implementation here
    const wss = new WebSocket.Server({ server });
    wss.on('connection', (ws) => {
        console.log('Client connected');

        ws.on('message', (message) => {
            const timestamp = new Date().toLocaleString();
            console.log(`${timestamp} - Received message => ${message}`);
            ws.send(`${timestamp} - Server => ${message}`);
        });

        ws.on('error', (error) => {
            console.log('Error occurred:', error);
        });

        ws.on('close', () => {
            console.log('Client disconnected');
        });
    });
}

app.get('/websocket', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

setupWebSocket(server);

server.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

// Expected Output:

// 1. Clients should be able to establish a WebSocket connection to
// "/websocket".
// 2. Messages sent by clients should be echoed back by the server.

// Test Cases:

// 1. Establish a WebSocket connection and send a message; it
// should be echoed back.