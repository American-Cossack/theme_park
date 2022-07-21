const mongoose = require("mongoose")
const MissingSchema = require("./missingEntities")
const WildSchema = require("./wildAnimals")

const MissingEntity = mongoose.model("MissingEntity", MissingSchema)
const WildAnimal = mongoose.model("WildAnimal", WildSchema)

module.exports = {
  MissingEntity,
  WildAnimal,
}
