// routes/chatbot.js
const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
    const { message } = req.body;

    // Simulate an AI response (replace with OpenAI or Dialogflow API)
    const botResponse = `You said: "${message}". How can I assist further?`;

    res.json({ reply: botResponse });
});

module.exports = router;
