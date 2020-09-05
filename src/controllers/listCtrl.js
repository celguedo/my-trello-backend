/**
 * @author Carlos Elguedo
 * @version 0.0.1
 * File in charge of managing and controlling the operations requested to the api
 */
const List = require("../models/listModel");

//Controller to export
const listCtrl = {};

listCtrl.create = async (req, res, next) => {
  try {
    const { nameList } = req.body;
    const positionMax = (await List.find().sort({ position: 1 })[0]) || 0;
    const newList = new List({
      name: nameList,
      position: positionMax + 1
    });
    await newList.save();
    res.json({
      message: "list created"
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

listCtrl.getList = async (req, res, next) => {
  try {
    const lists = await List.find();
    console.log("listCtrl.getList -> lists", lists);
    res.json({
      lists,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = listCtrl;
