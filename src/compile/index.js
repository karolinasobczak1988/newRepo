"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
// Middleware to parse JSON payloads
app.use(express_1.default.json());
// Webhook endpoint to handle GitHub push event
app.post('/generic-webhook-trigger/invoke', (req, res) => {
    console.log('Received webhook at /generic-webhook-trigger/invoke');
    console.log('Webhook payload:', req.body); // Log the incoming payload
    // Respond to GitHub to confirm receipt
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
            color: darkviolet; /* Changed to valid color */
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
// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`ngrok URL: https://5dc3-78-145-99-237.ngrok-free.app`); // Show ngrok URL
});
