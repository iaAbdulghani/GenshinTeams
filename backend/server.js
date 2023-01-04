require('dotenv').config();
const express = require('express')
const cors = require('cors')
const axios = require('axios')


const app = express()

app.use(express.json())
app.use(cors())

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error=>console.error(error))
db.once('open',()=>console.log('Connected to Mongoose'))

const teamRoute = require("./routes/teamRoute")
const characterRoute = require("./routes/characterRoute")

app.use("/teams", teamRoute)
app.use("/characters", characterRoute)

app.listen(3001,()=>{
    console.log("Server is running")
    // axios.get("https://api.genshin.dev/characters")
    // .then(function(response){
    //     response.data.forEach(character=>{
    //         console.log(character)
    //     })
    // })
})
