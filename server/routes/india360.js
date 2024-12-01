// routes/india360.js
const express = require("express");
const router = express.Router();

// Example data - replace with actual data from database if needed
const iconicPlaces = [
    {
        name: "Taj Mahal",
        description: "A symbol of love and one of the Seven Wonders of the World.",
        link: "https://www.google.com/maps/embed?pb=!4v1617136968006!6m8!1m7!1sCAoSLEFGMVFpcE8xeU5fbm52dnBjUGpndXc2UmpQQUF5cWlDTVJ6Mkt3VjMxaHMLyZj5dnHqvvHxWs4ov1dy5eMftflPxVDCk63mmY6pH6BwA3d7f-gKnRVk",
    },
    {
        name: "Qutub Minar",
        description: "An iconic minaret and UNESCO World Heritage Site.",
        link: "https://www.google.com/maps/embed?pb=!4v1617137022353!6m8!1m7!1sCAoSLEFGMVFpcE5XWkx5ZkF5U2NBZV9qRHpGVHZTM0s3R1g5a1V3S2EHK2qlIQfwY3V1OcgIckK7e6UEkFvwK1cD0Dkbx-V5IYwKnXkjYBOw5MP1pc9Sc-9jeTkcbQ",
    },
    {
        name: "Red Fort",
        description: "A symbol of Mughal architecture and India's history.",
        link: "https://www.google.com/maps/embed?pb=!4v1617137003452!6m8!1m7!1sCAoSLEFGMVFpcFBmZ0lVbXdXZDdOQWxKN0hWNzZBbmZ4bWlzaWpzVmhIYmN0V3M2dXdqRU4iUs4m_b9F1YNB_5d3K3r1hx2FeKYgH7D8wKbMlY8rn",
    },
    {
        name: "Gateway of India",
        description: "A historical monument in Mumbai built during the British Raj.",
        link: "https://www.google.com/maps/embed?pb=!4v1617136882948!6m8!1m7!1sCAoSLEFGMVFpcE1Yb3l6ZWVNYUp5VEdzYm5lRjlWZzVjZGZnb05pYzIzS3lkakxIUnp4UGFvNNzGmjXgcs0wYn-7XaCEAcJKBoZd_ycc",
    },
    {
        name: "Lotus Temple",
        description: "A Bahá'í House of Worship, known for its lotus-like shape.",
        link: "https://www.google.com/maps/embed?pb=!4v1617137070285!6m8!1m7!1sCAoSLEFGMVFpcE8wQkNpdDFuTjY2OHpYQkQ0cDJPXQvqsdRjpknmSMx9AFhpJ0yP2zwD4neEzggpV2f8",
    },
];

// GET endpoint to return the iconic places data
router.get("/", (req, res) => {
    res.json(iconicPlaces);
});

module.exports = router;
