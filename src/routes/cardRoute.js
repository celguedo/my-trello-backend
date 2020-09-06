const router = require("express").Router();
const authentication = require("../utils/authentication");
const cardCtrl = require("../controllers/cardCtrl");

router.post("/create", authentication, cardCtrl.create);

router.get("/get", authentication, cardCtrl.getCards);

module.exports = router;
