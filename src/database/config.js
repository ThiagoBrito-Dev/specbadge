const { MongoClient } = require("mongodb");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: ".env.local" });
}

function fixedEncodeURIComponent(string) {
  // this function extends the functionality of the "encodeURIComponent" function, because,
  // according to the RFC 3986 the following characters do not have to be used in URIs:
  return encodeURIComponent(string).replace(/[!'()*]/g, (char) => {
    return "%" + char.charCodeAt(0).toString(16);
  });
}

const user = fixedEncodeURIComponent(process.env.DATABASE_USER);
const password = fixedEncodeURIComponent(process.env.DATABASE_USER_PASSWORD);
const cluster = fixedEncodeURIComponent(process.env.CLUSTER_NAME);

const uri = `mongodb+srv://${user}:${password}@${cluster}.2svbf.mongodb.net/specbadge?retryWrites=true&w=majority`;
const options = { appName: "specbadge", minPoolSize: 25 };
const client = new MongoClient(uri, options);

module.exports = client;
