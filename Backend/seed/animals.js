const db = require("../db")
const { WildAnimal, MissingEntity } = require("../models") //SCHEMAS HAVE TO BE IN BRACKETS YA DINGUS

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const animals = [
    {
      name: "Racoon",
      diet: "trash and other assorted leftovers",
      quantity: "23",
      image:
        "https://www.flickr.com/photos/196109233@N07/52231643006/in/dateposted-public/",
    },
    {
      name: "Possum",
      diet: "funnel cakes",
      quantity: "13",
      image:
        "https://www.flickr.com/photos/196109233@N07/52231649018/in/dateposted-public/",
    },
    {
      name: "Bats",
      diet: "the blood of children",
      quantity: "666",
      image: " ",
    },
    {
      name: "Snake",
      diet: "other missing animals",
      quantity: "1",
      image:
        "https://www.flickr.com/photos/196109233@N07/52230645607/in/dateposted-public/",
    },
  ]

  await WildAnimal.insertMany(animals)
  console.log("Created some animals!")
}
const run = async () => {
  await main()
  db.close()
}

run()
