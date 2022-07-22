const { WildAnimal, MissingEntity } = require("../models/")

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

const getAnimalById = async (req, res) => {
  try {
    const { id } = req.params
    const selectedAnimal = await WildAnimal.findById(id)
    return res.json({ selectedAnimal })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createMissingEntity = async (req, res) => {
  try {
    const missingEntities = await new MissingEntity(req.body)
    await missingEntities.save()
    return res.status(201).json({
      missingEntities,
    })
  } catch (error) {
    return res.status(500).json(error.message)
  }
}

module.exports = {
  getAllMissing,
  getAllAnimals,
  getEntityById,
  getAnimalById,
  createMissingEntity,
}
