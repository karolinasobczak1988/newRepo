import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json()); // This is necessary to parse JSON payloads from GitHub

// Webhook endpoint to handle GitHub push event
app.post('/github-webhook', (req: Request, res: Response) => {
  // Ensure you're using the req parameter properly
  console.log('Received GitHub webhook:', req.body);  // Log the incoming payload

  // Respond to GitHub to confirm receipt
  res.status(200).send('Webhook received');
});

// Main route (can be used for testing)
app.get('/', (_req: Request, res: Response) => {
  res.send(`
    <html>
      <head>
        <style>
          body {
            background-color: magenta;
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
