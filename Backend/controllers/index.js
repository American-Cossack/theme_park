const { WildAnimal, MissingEntity } = require("../models/")

const createAnimal = async (req, res) => {
  try {
    const wildAnimal = await new WildAnimal(req.body)
    await wildAnimal.save()
    return res.status(201).json({
      wildAnimal,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllAnimals = async (req, res) => {
  try {
    const animals = await WildAnimal.find({})
    res.json(animals)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getAnimalById = async (req, res) => {
  try {
    const { id } = req.params
    const wildAnimal = await WildAnimal.findById(id)
    if (wildAnimal) {
      return res.status(200).json({ plant })
    }
    return res.status(404).send("Animal with the specified ID does not exists")
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createAnimal,
  getAllAnimals,
  getAnimalById,
}
