/**
 * @author Carlos Elguedo
 * @version 0.0.1
 * File in charge of managing and controlling the operations requested to the api
 */
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
      listId,
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
/* 
cardCtrl.delete = async (req, res, next) => {
  try {
    const { id } = req.body;
    const currentList = await List.find({ _id: id });
    if (!currentList)
      return res
        .status(400)
        .json({ msg: "The list don't exists on the database" });
    await List.deleteOne({ _id: id });
    res.json({
      message: "list delete",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
 */

cardCtrl.getCards = async (req, res) => {
  try {
    const cards = await Card.find();
    console.log("cardCtrl.getCards -> cards", cards);
    res.json({
      cards,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = cardCtrl;
