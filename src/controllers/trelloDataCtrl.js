
const List = require("../models/listModel");
const Card = require("../models/cardModel");

const trelloDataCtrl = {};

trelloDataCtrl.getLists = async (req, res) => {
  try {
    const lists = await List.find();
    res.json({
      lists
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

trelloDataCtrl.getCards = async (req, res) => {
    try {
      const cards = await Card.find();
      res.json({
        cards
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

module.exports = trelloDataCtrl;
