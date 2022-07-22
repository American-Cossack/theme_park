const db = require('../db')
const { WildAnimal, MissingEntity } = require('../models') //SCHEMAS HAVE TO BE IN BRACKETS YA DINGUS

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  await WildAnimal.deleteMany({})
  await MissingEntity.deleteMany({})
  console.log('Deleted Collections')
}
const run = async () => {
  await main()
  db.close()
}

run()
