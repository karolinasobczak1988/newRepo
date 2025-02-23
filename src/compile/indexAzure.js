"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const events_1 = require("events");
const http_1 = __importDefault(require("http"));
// Increase the EventEmitter listener limit
events_1.EventEmitter.defaultMaxListeners = 20;
console.log("MaxListeners limit increased to 20");
const app = (0, express_1.default)();
const port = process.env.PORT || 3000; // Use Azure-assigned port
// Middleware to parse JSON payloads
app.use(express_1.default.json());
// Webhook endpoint to handle GitHub push event
app.post('/generic-webhook-trigger/invoke', (req, res) => {
    const token = req.query.token;
    if (token !== 'JenkinsToken') {
        console.error('Invalid token received');
        res.status(403).send('Forbidden: Invalid Token');
        return;
    }
    console.log('Received webhook at /generic-webhook-trigger/invoke?token=JenkinsToken');
    console.log('Webhook payload:', req.body);
    res.status(200).send('Webhook received');
});
// Main route for testing the server
app.get('/', (_req, res) => {
    res.send(`
    <html>
      <head>
        <style>
          body {
            background-color: magenta;
            color: black;
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 20%;
            font-size: 36px;
          }
        </style>
      </head>
      <body>
        <h1>Hello World</h1>
      </body>
    </html>
  `);
});
// Function to start the server safely
const server = http_1.default.createServer(app);
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`⚠️ Port ${port} is already in use. Trying another port...`);
        server.listen(0, () => {
            const newPort = server.address().port;
            console.log(`✅ Server started on new available port: ${newPort}`);
        });
    }
    else {
        console.error('❌ Server failed to start:', err);
        process.exit(1);
    }
});
// Start the server
server.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
});
