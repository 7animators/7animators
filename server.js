// server.js
import express from 'express';
import fetch from 'node-fetch';
const app = express();
const API_KEY = process.env.YOUTUBE_API_KEY;
const CHANNEL_ID = "UC2S-PCEHkB034IyJh8Ha7pg";

app.get('/videos', async (req, res) => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&order=viewCount&maxResults=6&channelId=${CHANNEL_ID}&key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
});

app.listen(3000, () => console.log('Server running on port 3000'));
