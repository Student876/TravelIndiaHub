// models/Ticket.js
const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
    name: { type: String, required: true },
    date: { type: Date, required: true },
    mode: { type: String, required: true },
    price: { type: Number, required: true },
});

module.exports = mongoose.model("Ticket", ticketSchema);
