/**
 * @author Carlos Elguedo
 * @version 0.0.1
 * File in charge of managing and controlling the operations requested to the api
 */
const List = require("../models/listModel");

//Controller to export
const listCtrl = {};

listCtrl.create = async (req, res) => {
  try {
    const { nameList } = req.body;
    const listMax = await List.find().sort({ age: -1 }).limit(1);
    const position = listMax.length === 0 ? 0 : listMax[0].position;
    const newList = new List({
      name: nameList,
      position: +position + 1,
    });
    await newList.save();
    res.json({
      message: "list created",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

listCtrl.delete = async (req, res) => {
  try {
    const { id } = req.params;
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

listCtrl.getLists = async (req, res) => {
  try {
    const lists = await List.find();
    res.json({
      lists,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = listCtrl;
