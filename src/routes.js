const express = require("express");
const HomeController = require("./controllers/HomeController");
const LoginController = require("./controllers/LoginController");
const BadgeController = require("./controllers/BadgeController");
const router = new express.Router();

router.get("/", HomeController.show);
router.get("/login", LoginController.show);
router.get("/badge", BadgeController.show);

module.exports = router;
