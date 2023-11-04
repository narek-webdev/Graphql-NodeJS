const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.rqnu1or.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, { useUnifiedTopology: true });

const dbName = "express-js";

async function connect() {
  try {
    await client.connect();

    return client.db(dbName);
  } catch (err) {
    console.error(err);
  }
}

module.exports = { connect };
