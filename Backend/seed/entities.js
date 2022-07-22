const db = require("../db")
const { MissingEntity } = require("../models")

// Connect to the database
db.on("error", console.error.bind(console, "MongoDB connection error:"))

const main = async () => {
  const entities = [
    {
      name: "Jimmy Swanson",
      age: "12 years old",
      description:
        " The sweetest kid you'll ever see, but a bit of a sweet tooth. Last seen jumping over the railing after a glimmer of lilipop below.",
      timeMissing: "3 days",
      image: "https://live.staticflickr.com/65535/52230645582_d48bc75153_b.jpg",
      isHuman: "true",
    },
    {
      name: "Braxton Paisley",
      age: "7 years old",
      description:
        " A bit of a snot nose ankle biter, if we're being honest. Might still be attached to his half of the child leash. If seen: proceed with caution.",
      timeMissing: "6 hours",
      image:
        "https://i.pinimg.com/236x/3f/b0/32/3fb0329547a4d703a4f307f661978379--kid-kid-my-children.jpg",
      isHuman: "true",
    },
    {
      name: "X AE A-12",
      age: "2 years old",
      description:
        "Little is known of this strange enigma of a child. Rumors claim that he lives in the park now, terrorizing guests with his psychic powers. His father claims he is very proud.",
      timeMissing: "48 days",
      image: "https://live.staticflickr.com/65535/52231649008_dcc9648337_k.jpg",
      isHuman: "true",
    },
    {
      name: "Greg Magnus",
      age: "46 years old",
      description:
        "Lost in the park since 1972. Legends state he might still be out there - subsisting entirely off of flat soda and half-eaten chicken wings. Rumors are that he and X AE A-12 skirmish over territory at night.",
      timeMissing: "40 years",
      image: "https://live.staticflickr.com/65535/52231643041_fae81f4c78_z.jpg",
      isHuman: "true",
    },
    {
      name: "Poutine",
      age: "7 years old",
      description:
        "A brown bear cub that one man smuggled into the park 7 years ago.",
      timeMissing: "7 years",
      image: "https://live.staticflickr.com/65535/52230644172_037e0d0059_c.jpg",
      isHuman: "false",
    },
    {
      name: "Lasagna",
      age: "7 years old",
      description: "A fat, orange, and lazy cat",
      timeMissing: "2 weeks",
      image: "https://live.staticflickr.com/65535/52231643021_66bf243d7f_b.jpg",
      isHuman: "false",
    },
    {
      name: "Rexbo",
      age: "4 years old",
      description:
        "A good boy, even his brief absence has saddened many at the park. Rumored to serve X AE A-12, it's possible some deal with him might free Rexbo.",
      timeMissing: "1 week",
      image:
        "https://i.pinimg.com/736x/01/a6/37/01a6377ba21057b8a62b8ec4d72c217c--laughing-so-hard-toast.jpg",
      isHuman: "false",
    },
    {
      name: "Timothy",
      age: "???",
      description:
        "Brown and long, it is little surprise that this critter escaped into the theme park. His owner was last seen chasing after him as the ferret bolted into a food stand.",
      timeMissing: "90 seconds",
      image: "https://live.staticflickr.com/65535/52231916784_355b403691_h.jpg",
      isHuman: "false",
    },
  ]

  await MissingEntity.insertMany(entities)
  console.log("Created some entities!")
}
const run = async () => {
  await main()
  db.close()
}

run()
