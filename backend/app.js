const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Route to test API integration
app.get("/api/markets", async (req, res) => {
  try {
    const axios = require("axios");
    const response = await axios.get("https://api.coingecko.com/api/v3/global");
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
