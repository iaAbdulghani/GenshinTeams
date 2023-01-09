import  react, {useState, useEffect } from "react"
import axios from "axios"
import CharacterForm from "../components/CharacterForm/CharacterForm"
import CharacterDisplay from "../components/CharacterDisplay/CharacterDisplay"

const BASE_URL = "http://localhost:3001/characters"

function Characters() {
  const [characters, setCharacters] = useState([])
  const[character, setCharacter] = useState("")
    const[level, setLevel] = useState(0)
  

  useEffect(()=>{
    getCharacters()
    
  },[character])
  const getCharacters = ()=>{
    axios.get(`${BASE_URL}/characters`)
    .then((res)=> setCharacters(res.data))
    .catch((err)=>console.error(err))
   
  }

  const handleDeleteCharacter = (id)=>{
    axios
      .delete(`${BASE_URL}/character/delete/${id}`)
      .then((res=> setCharacters(characters.filter((character=>character._id !== res.data._id)))))
      .catch((err)=>console.error(err))
  }

  const handleAddCharacter = () =>{
    
    if(character=="" || level==0){
        console.log("Fill out input")
    }
    else{
        for(let i=0;i<characters.length;i++){
            if(characters[i].name==character.label){
                axios.post(`${BASE_URL}/character/update/${characters[i]._id}`,{
                level: level
                })
            .then((res)=>{
                setCharacter("")
            })
          .catch((err)=>console.error(err))
          document.getElementById("Level").value=""
          return;
            }
        }
        axios.post(`${BASE_URL}/character/new`,{
            name: character.label,
            fakeName: character.value,
            level: level
          })
          .then((res)=>{
            setCharacters([...characters,res.data])
            setCharacter("")
          })
          .catch((err)=>console.error(err))
    }
    document.getElementById("Level").value=""

  }

  

  function levelChange(event){
    let tempLevel = (event.target.value)
    if (isNaN(tempLevel)){
        event.target.value = level
    }
    else{
        setLevel(tempLevel)
    }
  }

 

  return (
    <div className="App">
      <div className='character-input-wrapper'>
      
      <CharacterForm currCharacter={character} setCharacter={setCharacter}/>
      <input id="Level" placeholder="Level" onChange={levelChange}/>
        <button className ='add-button'onClick={handleAddCharacter} >Add</button>
        
      </div>
      <div className = "characters">
        {characters.length > 0 && characters.map((curr)=><CharacterDisplay key={curr.name} curr={curr} deleteCharacter={handleDeleteCharacter}/>)}
      </div>
    </div>
  );
}

export default Characters;
