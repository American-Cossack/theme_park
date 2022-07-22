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
      image: "https://live.staticflickr.com/65535/52231643006_172aca1788_c.jpg",
    },
    {
      name: "Possum",
      diet: "funnel cakes",
      quantity: "13",
      image: "https://live.staticflickr.com/65535/52231649018_c325438fcc_b.jpg",
    },
    {
      name: "Bats",
      diet: "the blood of children",
      quantity: "666",
      image: "https://www.nickgowman.com/wp-content/uploads/cartoon-bat.jpg",
    },
    {
      name: "Snake",
      diet: "other missing animals",
      quantity: "1",
      image:
        "https://i0.wp.com/www.currentschoolnews.com/wp-content/uploads/2022/02/Cobra-With-A-Top-Hat.jpg?resize=600%2C600&ssl=1",
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
