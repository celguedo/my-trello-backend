const router = require("express").Router();
const authentication = require("../utils/authentication");
const listCtrl = require("../controllers/listCtrl");

router.get("/get", authentication, listCtrl.getLists);

router.post("/create", authentication, listCtrl.create);

router.delete("/delete/:id", authentication, listCtrl.delete);

module.exports = router;
