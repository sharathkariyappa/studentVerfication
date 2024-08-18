const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();
const port = 3001;

const app = express();
app.use(cors());
app.use(express.json());

const MORALIS_API_KEY = process.env.MORALIS_KEY;

app.get("/tokenPrice", async (req, res) => {
    const { query } = req;

    try {
        // Define endpoint for Moralis token price API
        const endpoint = `https://deep-index.moralis.io/api/v2/erc20/${query.addressOne}/price`;
        const headers = {
            "X-API-Key": MORALIS_API_KEY,
            "Content-Type": "application/json"
        };

        // Fetch token prices
        const responseOne = await axios.get(endpoint, { headers });
        const responseTwo = await axios.get(`https://deep-index.moralis.io/api/v2/erc20/${query.addressTwo}/price`, { headers });

        console.log(responseOne.data);
        console.log(responseTwo.data);

        const usdPrices = {
            tokenOne: responseOne.data.usdPrice,
            tokenTwo: responseTwo.data.usdPrice,
            ratio: responseOne.data.usdPrice / responseTwo.data.usdPrice
        };

        return res.status(200).json(usdPrices);
    } catch (error) {
        console.error("Error fetching token prices:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
});

// Start server
app.listen(port, () => {
    console.log(`Listening for API Calls on port ${port}`);
});
