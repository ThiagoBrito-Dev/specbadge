const { mongoClient, redisClient } = require("../database/config");
const serialize = require("serialize-javascript");

module.exports = {
  async connectToRedis() {
    await redisClient.connect();
  },
  async manageConnections() {
    if (mongoClient.topology?.s.state == "connected") {
      console.log("Connection to MongoDB is OK!");
    } else {
      console.log("Connecting with MongoDB...");
      await mongoClient.connect();
    }

    const result = await redisClient.ping(); // According to Redis documentation, the command
    // ping can be used both to verify the server connection and to measure its latency

    if (result == "PONG") {
      console.log("Connection to Redis is OK!");
    } else {
      console.log("Connecting with Redis...");
      await redisClient.connect();
    }
  },
  getSerializedData(data) {
    return serialize(data, { space: 2, isJSON: true });
  },
};
