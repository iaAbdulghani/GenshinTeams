const mongoose = require('mongoose')
const Schema = mongoose.Schema


const teamSchema = new Schema({
    character1:{
        type: Schema.Types.ObjectId, ref:'Character'
    },
    character2:{
        type: Schema.Types.ObjectId, ref:'Character'
    },
    character3:{
        type: Schema.Types.ObjectId, ref:'Character'
    },
    character4:{
        type: Schema.Types.ObjectId, ref:'Character'
    }
})

module.exports = mongoose.model('Team', teamSchema)