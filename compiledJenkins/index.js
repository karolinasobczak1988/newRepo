"use strict";
const express = require("express");
const app = express();
const port = 3000;
const jenkinsToken = "JenkinsToken"; // Set your actual Jenkins token

// Middleware to parse JSON payloads
app.use(express.json());

// GitHub Webhook: Accepts requests at `/github-webhook`
app.post("/github-webhook", (req, res) => {
    console.log("✅ Received webhook at /github-webhook");

    const token = req.query.token;
    if (jenkinsToken && token !== jenkinsToken) {
        console.error("❌ Invalid or missing token");
        return res.status(403).json({ error: "Forbidden: Invalid Token" });
    }

    console.log("🔍 Webhook Payload:", JSON.stringify(req.body, null, 2));
    res.status(200).json({ message: "Webhook received successfully" });
});

// **NEW: Accepts requests at `/generic-webhook-trigger/invoke`**
app.post("/generic-webhook-trigger/invoke", (req, res) => {
    console.log("✅ Received webhook at /generic-webhook-trigger/invoke");

    const token = req.query.token;
    if (jenkinsToken && token !== jenkinsToken) {
        console.error("❌ Invalid or missing token");
        return res.status(403).json({ error: "Forbidden: Invalid Token" });
    }

    console.log("🔍 Webhook Payload:", JSON.stringify(req.body, null, 2));
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
            color: blue;
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 20%;
            font-size: 36px;
          }
        </style>
      </head>
      <body>
        <h1>Dzień cwela 7.11.2024 - </h1>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server running at http://localhost:${port}`);
    console.log(`🌐 ngrok URL: (Replace this with your new ngrok URL)`);
});
