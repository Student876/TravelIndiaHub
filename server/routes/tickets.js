const express = require("express");
const router = express.Router();
const Ticket = require("../models/Ticket"); // Ensure this is declared only once

// Fetch all tickets
router.get("/", async (req, res) => {
    try {
        const tickets = await Ticket.find();
        res.json(tickets);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

// Add a new ticket
router.post("/", async (req, res) => {
    const { name, date, mode, price } = req.body;
    try {
        const ticket = new Ticket({ name, date, mode, price });
        await ticket.save();
        res.json(ticket);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

module.exports = router;
