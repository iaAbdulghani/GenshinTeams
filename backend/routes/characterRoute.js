const express = require("express")
const router = express.Router()

const { getCharacters, createCharacter, deleteCharacter, updateCharacter} = require("../controllers/characterController")

router.get("/characters", getCharacters)
router.post("/character/new", createCharacter)
router.delete("/character/delete/:id", deleteCharacter)
router.post("/character/update/:id", updateCharacter)
module.exports = router