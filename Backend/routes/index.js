const { Router } = require('express')
const router = Router()
const controllers = require('../controllers')

router.get('/', (req, res) => res.send('This is root!'))

router.get('/animals', controllers.getAllAnimals)
router.get('/entities', controllers.getAllMissing)
// router.get('/delete', controllers.removeAll)

module.exports = router
