const Team = require("../models/teamModel")

const getTeams = async(req,res) =>{
    const teams = await Team.find()
    res.json(teams)
}

const createTeam = (req,res)=>{
    const team = new Team({
        character1: req.body.character1,
        character2: req.body.character2,
        character3: req.body.character3,
        character4: req.body.character4
    })
    team.save()
    res.json(team)
}

const deleteTeam = async (req,res)=>{
    const deletedTeam = await Team.findByIdAndDelete(req.params.id)
    res.json(deletedTeam)
}

exports.getTeams = getTeams
exports.createTeam = createTeam
exports.deleteTeam = deleteTeam