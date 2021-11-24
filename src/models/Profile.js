const client = require("../database/config");

async function checkConnection() {
  if (client.topology) {
    if (client.topology.s.state === "connected") {
      console.log("Connection OK");
      return;
    }
  }

  await client.connect();
  console.log("Connecting...");
}

module.exports = {
  async get(comparisonData, getByUserName = false) {
    let userProfile;

    try {
      await checkConnection();

      const database = client.db("specbadge");
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
    }

    return userProfile;
  },
  async create(data) {
    try {
      checkConnection();

      const database = client.db("specbadge");
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
      checkConnection();

      const database = client.db("specbadge");
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
};
