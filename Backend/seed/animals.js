const db = require('../db')
const WildAnimal = require('../models/wildAnimals')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const animals = [
    {
      name: 'Racoon',
      diet: 'trash and other assorted leftovers',
      quantity: '23',
      image:
        'https://photos.google.com/album/AF1QipN5hXVi4CvWPzGCCFsijb-bXVbySW1pDTqBT-wO/photo/AF1QipPELyKuAAWgS6NyfJnVSTnO5gfZEkVbGSElt3IN'
    },
    {
      name: 'Possum',
      diet: 'funnel cakes',
      quantity: '13',
      image:
        'https://photos.google.com/album/AF1QipN5hXVi4CvWPzGCCFsijb-bXVbySW1pDTqBT-wO/photo/AF1QipOxZI-4KZDoC6MWbA4wzfm9AeRA3c7D_d654m3N'
    },
    {
      name: 'Bats',
      diet: 'the blood of children',
      quantity: '666',
      image:
        'https://photos.google.com/album/AF1QipN5hXVi4CvWPzGCCFsijb-bXVbySW1pDTqBT-wO/photo/AF1QipN4GCW4VkVd-LrADMsIedf99kwAd7U3Gv3oAafV'
    },
    {
      name: 'Snake',
      diet: 'other missing animals',
      quantity: '1',
      image:
        'https://photos.google.com/album/AF1QipN5hXVi4CvWPzGCCFsijb-bXVbySW1pDTqBT-wO/photo/AF1QipPhw5qmsAwleRcojlWtlg99vOQASTRNaQO4yKeY'
    }
  ]

  await WildAnimal.insertMany(animals)
  console.log('Created some animals!')
}
const run = async () => {
  await main()
  db.close()
}

run()
