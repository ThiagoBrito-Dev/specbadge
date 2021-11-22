const Client = require("../database/config");

module.exports = {
  async get(comparisonData, getByUserName = false) {
    let userProfile;

    try {
      await Client.connect();
      console.log("Connected to the server");

      const database = Client.db("specbadge");
      const profiles = database.collection("profiles");

      if (getByUserName) {
        userProfile = await profiles.findOne({ user: comparisonData });
      } else {
        userProfile = await profiles.findOne({ github_id: comparisonData });
      }
    } catch (error) {
      console.log(
        `Unfortunately, the following error occurred during the connection: ${error.message}`
      );
    } finally {
      await Client.close();
    }

    return userProfile;
  },
  async create(data) {
    try {
      await Client.connect();
      console.log("Connected to the server");

      const database = Client.db("specbadge");
      const profiles = database.collection("profiles");
      await profiles.insertOne(data);
    } catch (error) {
      console.log(
        `Unfortunately, the following error occurred during the connection: ${error.message}`
      );
    } finally {
      await Client.close();
    }
  },
  async update(data) {
    try {
      await Client.connect();
      console.log("Connected to the server");

      const database = Client.db("specbadge");
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
    } finally {
      await Client.close();
    }
  },
};
