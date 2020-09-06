const router = require("express").Router();
const authentication = require("../utils/authentication");
const cardCtrl = require("../controllers/cardCtrl");

router.post("/create", authentication, cardCtrl.create);

router.get("/get", authentication, cardCtrl.getCards);

router.patch("/update", authentication, cardCtrl.update);

router.delete("/delete/:id", authentication, cardCtrl.delete);

module.exports = router;
