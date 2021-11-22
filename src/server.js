const express = require("express");
const path = require("path");
const session = require("express-session");
const router = require("./routes");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: ".env.local" });
}

const server = new express();
const weekInMs = 1000 * 60 * 60 * 24 * 7;

server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "views"));
server.use(express.static("public"));
server.use(express.urlencoded({ extended: true }));
server.use(
  session({
    secret: process.env.SESSION_SECRET,
    saveUninitialized: false,
    resave: false,
    cookie: { maxAge: weekInMs },
  })
);
server.use(router);

server.listen(3000, () => {
  console.log("Server is running at <http://localhost:3000>");
});
