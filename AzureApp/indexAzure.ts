import express, { Request, Response } from 'express';
import { EventEmitter } from 'events';
import http from 'http';

// Increase the EventEmitter listener limit to prevent memory leaks
EventEmitter.defaultMaxListeners = 20;
console.log("MaxListeners limit increased to 20");

const app = express();
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;  // Use Azure-assigned port or 3000

// Middleware to parse JSON payloads
app.use(express.json());

// Webhook endpoint to handle GitHub push event
app.post('/generic-webhook-trigger/invoke', (req: Request, res: Response): void => {
  const token = req.query.token as string;
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
app.get('/', (_req: Request, res: Response): void => {
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
const server = http.createServer(app);

server.on('error', (err: NodeJS.ErrnoException) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`⚠️ Port ${port} is already in use. Trying another port...`);
    server.listen(0, () => {
      const serverAddress = server.address();
      if (serverAddress && typeof serverAddress === 'object') {
        console.log(`✅ Server started on new available port: ${serverAddress.port}`);
      }
    });
  } else {
    console.error('❌ Server failed to start:', err);
    process.exit(1);
  }
});

// Start the server
server.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
