const { client } = require("./config");

const initializeDatabase = {
  async init() {
    try {
      await client.connect();
      console.log("Connected to the server");

      const database = client.db("specbadge");
      await database.createCollection("profiles", {
        validator: {
          $jsonSchema: {
            bsonType: "object",
            required: ["github_id", "user", "event", "links"],
            properties: {
              github_id: {
                bsonType: "int",
                description: "Must be an integer number and is required",
              },
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
      await client.close();
    }
  },
};

initializeDatabase.init();
