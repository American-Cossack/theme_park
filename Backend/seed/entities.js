const db = require("../db");
const MissingEntities = require("../models/missingEntities");

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"));

const main = async () => {
  const entities = [
    {
      name: "Jimmy Swanson",
      Age: "12 years old",
      Description:
        " The sweetest kid you'll ever see, but a bit of a sweet tooth. Last seen jumping over the railing after a glimmer of lilipop below.",
      timeMissing: "3 days",
      image: "",
      isHuman: "true",
    },
    {
      name: "Braxton Paisley",
      Age: "7 years old",
      Description:
        " A bit of a snot nose ankle biter, if we're being honest. Might still be attached to his half of the child leash. If seen: proceed with caution.",
      timeMissing: "6 hours",
      image: "",
      isHuman: "true",
    },
    {
      name: "X AE A-12",
      Age: "2 years old",
      Description:
        "Little is known of this strange enigma of a child. Rumors claim that he lives in the park now, terrorizing guests with his psychic powers. His father claims he is very proud.",
      timeMissing: "48 days",
      image: "",
      isHuman: "true",
    },
    {
      name: "Greg Magnus",
      Age: "46 years old",
      Description:
        "Lost in the park since 1972. Legends state he might still be out there - subsisting entirely off of flat soda and half-eaten chicken wings. Rumors are that he and X AE A-12 skirmish over territory at night.",
      timeMissing: "36 years",
      image: "",
      isHuman: "true",
    },
    {
      name: "Poutine",
      Age: "7 years old",
      Description:
        "A brown bear cub that one man smuggled into the park 7 years ago.",
      timeMissing: "7 years",
      image: "",
      isHuman: "false",
    },
    {
      name: "Rexbo",
      Age: "7 years old",
      Description: "A fat, orange, and lazy cat",
      timeMissing: "2 weeks",
      image: "",
      isHuman: "false",
    },
  ];

  await MissingEntities.insertMany(entities);
  console.log("Created some entities!");
};
const run = async () => {
  await main();
  db.close();
};

run();
