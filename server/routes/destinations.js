// routes/destinations.js
const express = require("express");
const router = express.Router();

const destinations = [
    { name: "Kerala", description: "Known for its backwaters and lush greenery." },
    { name: "Jaipur", description: "Famous for palaces and rich culture." },
];

router.get("/", (req, res) => {
    res.json(destinations);
});

module.exports = router;
