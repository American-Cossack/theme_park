const db = require("../db");
const WildAnimal = require("../models/wildAnimals");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const animals = [
    {
      name: "Racoon",
      diet: "trash and other assorted leftovers",
      quantity: "23",
      image: "",
    },
    { name: "Possum", diet: "funnel cakes", quantity: "13", image: "" },
    { name: "Bats", diet: "the blood of children", quantity: "666", image: "" },
    { name: "Snake", diet: "other missing animals", quantity: "1", image: "" },
  ];

  await WildAnimal.insertMany(animals);
  console.log("Created some animals!");
};
const run = async () => {
  await main();
  db.close();
};

run();
