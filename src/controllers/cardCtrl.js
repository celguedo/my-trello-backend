/**
 * @author Carlos Elguedo
 * @version 0.0.1
 * File in charge of managing and controlling the operations requested to the api
 */
const mongoose = require("mongoose");
const Card = require("../models/cardModel");
const User = require("../models/userModel");

//Controller to export
const cardCtrl = {};

cardCtrl.create = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    if (!user)
      return res
        .status(400)
        .json({ msg: "The current user can't create a card" });
    const { title, listId, description, color, position } = req.body;

    const newCard = new Card({
      title,
      description,
      position,
      createdBy: user._id,
      color,
      listId: new mongoose.mongo.ObjectId(listId),
      nameCreatedBy: user.displayName,
    });

    await newCard.save();
    res.json({
      message: "card created",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

cardCtrl.update = async (req, res) => {
  try {
    const { listId, idCard } = req.body;

    if (!listId)
      return res
        .status(400)
        .json({ msg: "Please specify which fields to update" });

    const existsCard = await Card.findOne({ _id: idCard });
    if (!existsCard)
      return res
        .status(400)
        .json({ msg: "The Card don't exists on the database" });

    existsCard.listId = listId
      ? new mongoose.mongo.ObjectId(listId)
      : existsCard.listId;
    await existsCard.save();
    res.json({
      message: "Card updated",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

cardCtrl.delete = async (req, res) => {
  try {
    const { id } = req.params;
    const currentCard = await Card.find({ _id: id });
    if (!currentCard)
      return res
        .status(400)
        .json({ msg: "The Card don't exists on the database" });
    await Card.deleteOne({ _id: id });
    res.json({
      message: "Card delete",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

cardCtrl.getCards = async (req, res) => {
  try {
    const user = await User.findById(req.user);
    if (!user)
      return res
        .status(400)
        .json({ msg: "The current user don't exists on the database" });
    const { own, archive } = req.query;
    let filters = {};
    if (own === "true") filters.createdBy = user._id;
    if (archive === "true") filters.status = false;

    console.log("cardCtrl.getCards -> filters", filters);
    const cards = await Card.find(filters);
    res.json({
      cards,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = cardCtrl;
