const { WildAnimal, MissingEntity } = require('../models/')

const getAllMissing = async (req, res) => {
  try {
    const missing = await MissingEntity.find({})
    res.json(missing)
  } catch (error) {
    return res.status(500).send(error.message)
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

const getEntityById = async (req, res) => {
  try {
    const { id } = req.params
    const selectedEntity = await MissingEntity.findById(id)
    return res.json({ selectedEntity })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAllMissing,
  getAllAnimals,
  getEntityById
}
