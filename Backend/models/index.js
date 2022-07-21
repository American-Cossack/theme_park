const { model } = require('mongoose')
const MissingSchema = require('./missingEntities')
const WildSchema = require('./wildAnimals')

const MissingEntity = model('MissingEntity', MissingSchema)
const WildAnimal = model('WildAnimal', WildSchema)

module.exports = {
  MissingEntity,
  WildAnimal
}
