const db = require("../db");
const MissingEntities = require("../models/missingEntities");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const entities = [{}, {}];

  await MissingEntities.insertMany(entities);
  console.log("Created some entities!");
};
const run = async () => {
  await main();
  db.close();
};

run();
