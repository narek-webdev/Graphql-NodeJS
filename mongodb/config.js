const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://nareksargsyan950:A3xMaBYmqyTCtiO2@cluster0.rqnu1or.mongodb.net/?retryWrites=true&w=majority";

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
