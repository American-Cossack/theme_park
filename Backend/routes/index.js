const { Router } = require("express")
const { send } = require("process")
const router = Router()
const controllers = require("../controllers")

router.get("/", (req, res) => res.send("This is root!"))

router.get("/animals", controllers.getAllAnimals)
router.get("/entities", controllers.getAllMissing)
router.get("/:id", controllers.getEntityById)
router.get("/animal/:id", controllers.getAnimalById)
router.post("/new", controllers.createMissingEntity)
module.exports = router
