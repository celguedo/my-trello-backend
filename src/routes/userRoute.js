const router = require("express").Router();
const authentication = require("../utils/authentication");
const userCtrl = require("../controllers/userCtrl");

router.post("/register", userCtrl.singup);

router.get("/logout", userCtrl.logout);

router.post("/login", userCtrl.login);

router.post("/tokenIsValid", userCtrl.tokenIsValid);

router.get("/", authentication, userCtrl.getUser);

module.exports = router;
