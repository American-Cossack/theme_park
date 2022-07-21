const db = require("../db");
const WildAnimal = require("../models/wildAnimals");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const animals = [{}, {}];

  await WildAnimal.insertMany(animals);
  console.log("Created some plants!");
};
const run = async () => {
  await main();
  db.close();
};

run();
