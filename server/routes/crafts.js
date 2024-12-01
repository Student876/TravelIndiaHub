// routes/crafts.js
const express = require("express");
const router = express.Router();

const crafts = [
    { name: "Handloom Weaving", description: "Beautiful traditional textiles." },
    { name: "Pottery", description: "Exquisite handmade clay items." },
];

router.get("/", (req, res) => {
    res.json(crafts);
});

module.exports = router;
