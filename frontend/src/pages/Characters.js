import  react, {useState, useEffect } from "react"
import axios from "axios"
import CharacterForm from "../components/CharacterForm/CharacterForm"

const BASE_URL = "http://localhost:3001/characters"

function Characters() {
  const [characters, setCharacters] = useState([])
  const[character, setCharacter] = useState("")
    const[level, setLevel] = useState(0)
  

  useEffect(()=>{
    getCharacters()
    
  },[])
  const getCharacters = ()=>{
    axios.get(`${BASE_URL}/characters`)
    .then((res)=> setCharacters(res.data))
    .catch((err)=>console.error(err))
    console.log(characters)
  }

  const handleAddCharacter = () =>{
    
    if(character=="" || level==0){
        console.log("Fill out input")
    }
    else{
        axios.post(`${BASE_URL}/character/new`,{
            name: character.label,
            fakeName: character.value,
            level: level,
            pic: `https://api.genshin.dev/characters/${character.value}/icon-big`
          })
          .then((res)=>{
            setCharacters([...characters,res.data])
            setCharacter("")
          })
          .catch((err)=>console.error(err))
    }

  }

  const handleDeleteCharacter = (id)=>{
    console.log(characters)
    // axios
    //   .delete(`${BASE_URL}/character/delete/${id}`)
    //   .then((res=> setCharacters(characters.filter((character=>character._id !== res.data._id)))))
    //   .catch((err)=>console.error(err))
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

 
  const renderCharacter = (curr) =>(

    <div key={curr.name}>
        {curr.name}
        <img src={curr.pic}/>
    </div>
  )

  

  return (
    <div className="App">
      <div className='character-input-wrapper'>
      <CharacterForm currCharacter={character} setCharacter={setCharacter}/>
      <input placeholder="Level" onChange={levelChange}/>
        <button className ='add-button'onClick={handleAddCharacter} >Add</button>
        <button className ='add-button'onClick={handleDeleteCharacter} >Delete</button>
      </div>
      <div className = "characters">
        {characters.length > 0 && characters.map(renderCharacter)}
      </div>
    </div>
  );
}

export default Characters;
