"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json()); // To parse incoming JSON data from GitHub Webhook
// Route for testing purposes (Hello World page)
app.get('/', (req, res) => {
    res.send(`
    <html>
      <head>
        <style>
          body {
            background-color: darkyellow;
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
// GitHub webhook route
app.post('/github-webhook', (req, res) => {
    console.log('Webhook received:', req.body); // Logs the payload to confirm receipt
    res.status(200).send('Webhook received and processed');
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
