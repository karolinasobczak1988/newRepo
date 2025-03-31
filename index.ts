import { Request, Response } from 'express';
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const jenkinsToken = 'JenkinsToken'; // The token that you set in Jenkins job

// Middleware to parse JSON payloads
app.use(express.json());

// Serve static files from the Downloads directory
app.use('/images', express.static(path.join('C:/Users/karol/Downloads')));

// Webhook endpoint to handle GitHub push event
app.post('/generic-webhook-trigger/invoke', (req: Request, res: Response): void => {
  const token = req.query.token as string; // Extract token from query

  // Check if the token matches the expected Jenkins token
  if (token !== jenkinsToken) {
    console.log('Invalid token');
    res.status(403).send('Forbidden: Invalid Token');
    return;
  }

  console.log('Received webhook at /generic-webhook-trigger/invoke?token=JenkinsToken');
  console.log('Webhook payload:', req.body);  // Log the incoming payload

  // Respond to GitHub to confirm receipt
  res.status(200).send('Webhook received');
});

// Main route for testing the server
app.get('/', (_req: Request, res: Response): void => {
  res.send(`
    <html>
      <head>
        <style>
          body {
            background-color: magenta;
            color: red;
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 10%;
            font-size: 36px;
          }
          img {
            margin-top: 20px;
            width: 400px;
            height: auto;
          }
        </style>
      </head>
      <body>
        <h1>Niedziela dzien cwela</h1>
        <img src="/images/Jan_Matejko,_Stańczyk.jpg" alt="Stańczyk Painting">
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log(`ngrok URL: https://5dc3-78-145-99-237.ngrok-free.app`); // Show ngrok URL
});
