"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json()); // This is necessary to parse JSON payloads from GitHub
// Webhook endpoint to handle GitHub push event
app.post('/github-webhook', (req, res) => {
    console.log('Received GitHub webhook: ', req.body); // Log the incoming payload
    // Respond to GitHub to confirm receipt
    res.status(200).send('Webhook received');
});
// Main route (can be used for testing)
app.get('/', (req, res) => {
    res.send(`
    <html>
      <head>
        <style>
          body {
            background-color: darkred;
            color: darkpurple;
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
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
