const express = require("express");
const bodyParser = require("body-parser");
const { OpenAI } = require("openai");

const app = express();
app.use(bodyParser.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message || "";
    if (!userMessage.trim()) {
      return res.status(400).json({ error: "Missing 'message' in body" });
    }

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: userMessage }],
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error calling OpenAI" });
  }
});

// Simple health check
app.get("/", (_req, res) => {
  res.json({ ok: true, service: "gpt-server", endpoint: "/chat" });
});

module.exports = app;
