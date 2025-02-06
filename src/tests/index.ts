import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response): void => {
  res.send(`
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 50px;
          }
          #message {
            color: black;
            font-size: 24px;
          }
          #colorBtn {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
          }
        </style>
      </head>
      <body>
        <div id="message">Hello World</div>
        <button id="colorBtn">Change Text Color</button>
        <script>
          document.getElementById('colorBtn').addEventListener('click', () => {
            const message = document.getElementById('message');
            const colors = ['red', 'green', 'blue', 'orange', 'purple'];
            const currentColor = message.style.color;
            let newColor = colors[Math.floor(Math.random() * colors.length)];
            while (newColor === currentColor) {
              newColor = colors[Math.floor(Math.random() * colors.length)];
            }
            message.style.color = newColor;
          });
        </script>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
