"use strict";
var express = require('express');
var app = express();
var port = 3000;

app.get('/', function (_, res) {
  res.send(`
    <html>
      <head>
        <style>
          body {
            background-color: purple;
            color: white;
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

app.listen(port, function () {
  console.log("Server running at http://localhost:".concat(port));
});
