const router = require("express").Router();
const authentication = require("../utils/authentication");
const listCtrl = require("../controllers/listCtrl");

router.get("/get", authentication, listCtrl.getList);

router.post("/create", authentication, listCtrl.create);

//router.post("/edit", authentication, listCtrl.edit);

module.exports = router;
