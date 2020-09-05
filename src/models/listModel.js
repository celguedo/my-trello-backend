const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  status: { type: Boolean, default: true },
  position: { type: Number, required: true }
});

module.exports = mongoose.model("list", listSchema);