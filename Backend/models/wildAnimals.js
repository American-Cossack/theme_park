const mongoose = require('mongoose')
const Schema = mongoose.Schema

const WildAnimal = new Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
    diet: { type: String, required: true },
    quantity: { type: Number, required: true }
  },
  { timestamps: true }
)

// module.exports = mongoose.model('Animals', WildAnimal)
module.exports = WildAnimal
