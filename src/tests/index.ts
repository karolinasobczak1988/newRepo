import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.json());  // To parse incoming JSON data from GitHub Webhook

// Route for testing purposes (Hello World page)
app.get('/', (req: Request, res: Response) => {
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
app.post('/github-webhook', (req: Request, res: Response) => {
  console.log('Webhook received:', req.body);  // Logs the payload to confirm receipt
  res.status(200).send('Webhook received and processed');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
