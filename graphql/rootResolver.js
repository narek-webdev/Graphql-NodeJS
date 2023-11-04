const mongodb = require("../mongodb/config");

module.exports = {
  events: async () => {
    const database = await mongodb.connect();

    return await database.collection("events").find({}).toArray();
  },
  createEvent: async (args) => {
    const database = await mongodb.connect();
    const collection = await database.collection("events");

    const res = await collection.insertOne({
      name: args.eventInput.name,
      price: args.eventInput.price,
    });

    return await collection.findOne({ _id: res.insertedId });
  },
};
