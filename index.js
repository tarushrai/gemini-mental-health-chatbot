const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(express.json());

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;
    const response = await axios.post(
        'https://gemini-api-url.com/chat',
        { prompt: userMessage }
    );
    res.json({ reply: response.data });
});

app.listen(5000, () => console.log("Server running on port 5000"));
