const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  color: { type: String, default: "info" },
  createdAt: { type: Date, default: Date.now() },
  status: { type: Boolean, default: true },
  position: { type: String, required: true },
  createdBy:{type: Object, required: true },
  listId:{type: Object, required: true },
  nameCreatedBy:{type: String, required: true },
});

module.exports = mongoose.model("card", cardSchema);