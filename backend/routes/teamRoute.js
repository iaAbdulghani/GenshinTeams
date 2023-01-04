const express = require("express")
const router = express.Router()

const { getTeams, createTeam, deleteTeam} = require("../controllers/teamController")

router.get("/teams", getTeams)
router.post("/team/new", createTeam)
router.delete("/team/delete/:id", deleteTeam)

module.exports = router