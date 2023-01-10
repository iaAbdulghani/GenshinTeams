import  react, {useState, useEffect } from "react"
import axios from "axios"



const BASE_URL = "http://localhost:3001/teams"

function Teams() {
    const [teams, setTeams] = useState([])
    const [characters, setCharacters] = useState([])
   
    
    useEffect(()=>{
        getTeams()
        getCharacters()
        
    }, [])

    const getTeams = ()=>{
        axios.get(`${BASE_URL}/teams`)
        .then((res)=> setTeams(res.data))
        .catch((err)=>console.error(err))
       
    }

    const getCharacters = ()=>{
        axios.get("http://localhost:3001/characters/characters")
        .then((res)=> setCharacters(res.data))
        .catch((err)=>console.error(err))
       
      }

      const addTeam = ()=>{
        console.log(teams)
        console.log(characters)
      }

    return(
        <div className="App">
            <div className='team-input-wrapper'>

                <button className ='add-button' onClick={addTeam} >Add</button>
        
            </div>
        </div>
    )
}

export default Teams;
