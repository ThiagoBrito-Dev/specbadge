const { mongoClient, redisClient } = require("../database/config");
const { manageConnections, getSerializedData } = require("../utils/database");

module.exports = {
  async get(comparisonData, getIdFromUserName = false) {
    let userProfile;

    try {
      await manageConnections();

      if (getIdFromUserName) {
        // comparisonData = username
        comparisonData = await redisClient.sMembers(
          `username:${comparisonData}`
        );
      }

      // comparisonData = id
      userProfile = JSON.parse(
        await redisClient.hGet(`user:${comparisonData}`, "profile")
      );

      if (!userProfile) {
        const database = mongoClient.db("specbadge");
        const profiles = database.collection("profiles");
        userProfile = await profiles.findOne({ github_id: comparisonData });
      }
    } catch (error) {
      console.log(
        `Unfortunately, the following error occurred during the connection: ${error.message}`
      );
    }

    return userProfile;
  },
  async create(data) {
    try {
      await manageConnections();

      const database = mongoClient.db("specbadge");
      const profiles = database.collection("profiles");
      await profiles.insertOne(data);
    } catch (error) {
      console.log(
        `Unfortunately, the following error occurred during the connection: ${error.message}`
      );
    }
  },
  async update(data) {
    try {
      await manageConnections();

      const database = mongoClient.db("specbadge");
      const profiles = database.collection("profiles");
      await profiles.updateOne(
        { github_id: data.github_id },
        {
          $set: {
            user: data.user,
            event: data.event,
            "links.youtube": data.links.youtube,
            "links.instagram": data.links.instagram,
            "links.facebook": data.links.facebook,
            "links.twitter": data.links.twitter,
          },
        }
      );
    } catch (error) {
      console.log(
        `Unfortunately, the following error occurred during the connection: ${error.message}`
      );
    }
  },
  async updateCache(data) {
    try {
      await manageConnections();

      const newData = getSerializedData(data);

      await redisClient.hSet(`user:${data.github_id}`, "profile", newData);
      await redisClient.sAdd(`username:${data.user}`, String(data.github_id));
    } catch (error) {
      console.log(
        `Unfortunately, the following error occurred during the connection: ${error.message}`
      );
    }
  },
};
