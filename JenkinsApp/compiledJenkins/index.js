"use strict";
const express = require("express");
const app = express();
const port = 3000;
const jenkinsToken = "JenkinsToken"; // Set your actual Jenkins token

// Middleware to parse JSON payloads
app.use(express.json());

// Webhook endpoint to handle GitHub push event
app.post("/github-webhook", (req, res) => {
    console.log("Received webhook at /github-webhook");

    // Extract token from query params
    const token = req.query.token;

    // Validate token (if required)
    if (jenkinsToken && token !== jenkinsToken) {
        console.error("❌ Invalid or missing token");
        return res.status(403).json({ error: "Forbidden: Invalid Token" });
    }

    console.log("✅ Webhook payload received:", JSON.stringify(req.body, null, 2));

    // Send success response
    res.status(200).json({ message: "Webhook received successfully" });
});

// Main route for testing the server
app.get("/", (_req, res) => {
    res.send(`
    <html>
      <head>
        <style>
          body {
            background-color: magenta;
            color: red;
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

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
    console.log(`🌐 ngrok URL: (Replace this with your new ngrok URL)`);
});
