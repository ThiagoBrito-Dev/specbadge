const { MongoClient } = require("mongodb");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: ".env.local" });
}

const password = process.env.DATABASE_USER_PASSWORD;
const url = `mongodb+srv://trybrito:${password}@credential.2svbf.mongodb.net/specbadge?retryWrites=true&w=majority`;

module.exports = new MongoClient(url);
