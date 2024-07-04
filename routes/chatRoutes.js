const express = require("express");
const router = express.Router();
const { createRoom, getRoom } = require("../controllers/chatroomController");

app.post("/rooms", createRoom);
app.get("/rooms", getRoom);

module.exports = router;
