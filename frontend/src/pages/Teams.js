import  react, {useState, useEffect } from "react"
import axios from "axios"
import TeamForm from "../components/TeamForm/TeamForm"
import TeamDisplay from "../components/TeamDisplay/TeamDisplay"



const BASE_URL = "http://localhost:3001/teams"

function Teams() {
    const [teams, setTeams] = useState([])
    const [characters, setCharacters] = useState([])
    const [character1, setCharacter1] = useState("")
    const [character2, setCharacter2] = useState("")
    const [character3, setCharacter3] = useState("")
    const [character4, setCharacter4] = useState("")
    
    
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
        axios.post(`${BASE_URL}/team/new`,{
            character1: character1.value,
            character2: character2.value,
            character3: character3.value,
            character4: character4.value
          })
          .then((res)=>{
            setTeams(...teams,res.data)
            console.log(teams)
          })
          .catch((err)=>console.error(err))
        
      }
      const deleteTeam = (id)=>{
        
        axios
      .delete(`${BASE_URL}/team/delete/${id}`)
      .then((res=> setTeams(teams.filter((team=>team._id !== res.data._id)))))
      .catch((err)=>console.error(err))
        
      }

    return(
        <div className="App">
            <div className='team-input-wrapper'>
                <TeamForm characters={characters}number={1} selected={character1} setCharacter={setCharacter1}/>
                <TeamForm characters={characters}number={2} selected={character2} setCharacter={setCharacter2}/>
                <TeamForm characters={characters}number={3} selected={character3} setCharacter={setCharacter3}/>
                <TeamForm characters={characters}number={4} selected={character4} setCharacter={setCharacter4}/>
                <button className ='add-button' onClick={addTeam} >Add</button>
        
            </div>
            
      <div className = "teams">
        {teams.length > 0 && teams.map((curr, index)=><TeamDisplay key={index} currentTeam={curr} allCharacters={characters} handleDelete={deleteTeam}/>)}
      </div>
        </div>
    )
}

export default Teams;
