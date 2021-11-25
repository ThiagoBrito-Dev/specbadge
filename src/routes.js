const express = require("express");
const BadgeController = require("./controllers/BadgeController");
const LoginController = require("./controllers/LoginController");
const SearchController = require("./controllers/SearchController");
const ErrorController = require("./controllers/ErrorController");
const router = new express.Router();

router.get("/", BadgeController.show);
router.get("/login", LoginController.show);
router.get("/badge", BadgeController.show);
router.post("/badge", BadgeController.save);
router.get("/badges/:user", SearchController.show);

// the declaration bellow will only be accessed when the route that the user is trying to
// reach does not exist in the app. [Maybe there are better ways to do this]
router.get(/\/*/, ErrorController.show);

module.exports = router;
