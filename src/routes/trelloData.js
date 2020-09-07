const router = require("express").Router();
const trelloDataCtrl = require("../controllers/trelloDataCtrl");

router.get("/get-list", trelloDataCtrl.getLists);

router.get("/get-cards", trelloDataCtrl.getCards);

module.exports = router;
