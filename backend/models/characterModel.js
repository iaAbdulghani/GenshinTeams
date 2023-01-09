const mongoose = require('mongoose')
const Schema = mongoose.Schema

const characterSchema = new Schema({
    name:{
        type: String
    },
    apiName:{
        type: String
    },
    level:{
        type: Number
    }
})

module.exports = mongoose.model('Character', characterSchema)