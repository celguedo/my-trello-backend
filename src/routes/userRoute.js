const router = require("express").Router();
const bcrypt = require("bcryptjs");
const authentication = require("../utils/authentication");
const User = require("../models/userModel");
const userCtrl = require("../controllers/userCtrl");

router.post("/register", userCtrl.singup);

router.get("/logout", userCtrl.logout);

router.post("/login", userCtrl.login);

router.post("/tokenIsValid", userCtrl.tokenIsValid);

router.get("/", authentication, userCtrl.getUser);

module.exports = router;
