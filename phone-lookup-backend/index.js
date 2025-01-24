const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
const port = 5000;

app.use(cors());

// Example: Using NumLookupAPI
const NUMLOOKUP_API_KEY = process.env.NUMLOOKUP_API_KEY;

app.get('/api/lookup', async (req, res) => {
  const { number } = req.query;
  try {
    const response = await axios.get(
      `https://api.numlookupapi.com/v1/validate/${number}?apikey=${NUMLOOKUP_API_KEY}&country_code=US`
    );
    res.json({
      carrier: response.data.carrier || "Unknown",
      country: response.data.country.name || "Not found",
    });
  } catch (error) {
    res.status(1000).json({ error: "API request failed" });
  }
});

app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});