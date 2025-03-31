"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var path = require('path');
var app = express();
var port = 3000;
var jenkinsToken = 'JenkinsToken'; // The token that you set in Jenkins job
// Middleware to parse JSON payloads
app.use(express.json());
// Serve static files from the Downloads directory
app.use('/images', express.static(path.join('C:/Users/karol/Downloads')));
// Webhook endpoint to handle GitHub push event
app.post('/generic-webhook-trigger/invoke', function (req, res) {
    var token = req.query.token; // Extract token from query
    // Check if the token matches the expected Jenkins token
    if (token !== jenkinsToken) {
        console.log('Invalid token');
        res.status(403).send('Forbidden: Invalid Token');
        return;
    }
    console.log('Received webhook at /generic-webhook-trigger/invoke?token=JenkinsToken');
    console.log('Webhook payload:', req.body); // Log the incoming payload
    // Respond to GitHub to confirm receipt
    res.status(200).send('Webhook received');
});
// Main route for testing the server
app.get('/', function (_req, res) {
    res.send("\n    <html>\n      <head>\n        <style>\n          body {\n            background-color: magenta;\n            color: red;\n            font-family: Arial, sans-serif;\n            text-align: center;\n            margin-top: 10%;\n            font-size: 36px;\n          }\n          img {\n            margin-top: 20px;\n            width: 400px;\n            height: auto;\n          }\n        </style>\n      </head>\n      <body>\n        <h1>Niedziela dzien cwela</h1>\n        <img src=\"/images/Jan_Matejko,_Sta\u0144czyk.jpg\" alt=\"Sta\u0144czyk Painting\">\n      </body>\n    </html>\n  ");
});
// Start the server
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port));
    console.log("ngrok URL: https://5dc3-78-145-99-237.ngrok-free.app"); // Show ngrok URL
});
