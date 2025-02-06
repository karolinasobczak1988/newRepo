import express from 'express';

const app = express();
const port = 3000;

app.get('/', (_, res) => {
  res.send(`
    <html>
      <head>
        <style>
          body {
            background-color: lightblue;
            color: darkblue;
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
