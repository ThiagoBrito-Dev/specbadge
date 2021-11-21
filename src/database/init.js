const Client = require("./config");

const initializeDatabase = {
  async init() {
    try {
      await Client.connect();
      console.log("Connected to the server");

      const database = Client.db("specbadge");
      await database.createCollection("profiles", {
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: ["user", "event", "links"],
            properties: {
              user: {
                bsonType: "string",
                description: "Must be a string and is required",
              },
              event: {
                bsonType: "string",
                description: "Must be a string and is required",
              },
              links: {
                bsonType: "object",
                required: ["youtube", "instagram", "facebook", "twitter"],
                properties: {
                  youtube: {
                    bsonType: "string",
                    description: "Must be a string and is required",
                  },
                  instagram: {
                    bsonType: "string",
                    description: "Must be a string and is required",
                  },
                  facebook: {
                    bsonType: "string",
                    description: "Must be a string and is required",
                  },
                  twitter: {
                    bsonType: "string",
                    description: "Must be a string and is required",
                  },
                },
              },
            },
          },
        },
      });
    } catch (error) {
      console.log(
        `Unfortunately, the following error occurred during the connection: ${error.message}`
      );
    } finally {
      await Client.close();
    }
  },
};

initializeDatabase.init();
