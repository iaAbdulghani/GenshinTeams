const Character = require("../models/characterModel")

const getCharacters = async(req,res) =>{
    const characters = await Character.find()
    res.json(characters)
}

const createCharacter = (req,res)=>{
    const character = new Character({
        name: req.body.name

    })
    character.save()
    res.json(character)
}

const deleteCharacter = async (req,res)=>{
    const deletedCharacter= await Character.findByIdAndDelete(req.params.id)
    res.json(deletedCharacter)
}

exports.getCharacters = getCharacters
exports.createCharacter = createCharacter
exports.deleteCharacter = deleteCharacter