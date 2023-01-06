import  react, {useState, useEffect } from "react"
import axios from "axios"
import CharacterForm from "../components/CharacterForm/CharacterForm"

const BASE_URL = "http://localhost:3001/characters"

function Characters() {
  const [characters, setCharacters] = useState([])
  const [character, setCharacter] = useState("")

  

  useEffect(()=>{
    getCharacters()
 
  },[])
  const getCharacters = ()=>{
    axios.get(`${BASE_URL}/characters`)
    .then((res)=> setCharacters(res.data))
    .catch((err)=>console.error(err))
  }

  const handleAddCharacter = () =>{
    axios.post(`${BASE_URL}/character/new`,{
      name: character
      
    })
    .then((res)=>{
      setCharacters([...characters,res.data])
      setCharacter("")
    })
    .catch((err)=>console.error(err))
  }

  const handleDeleteCharacter = (id)=>{
    axios
      .delete(`${BASE_URL}/character/delete/${id}`)
      .then((res=> setCharacters(characters.filter((character=>character._id !== res.data._id)))))
      .catch((err)=>console.error(err))
  }

 

  

  return (
    <div className="App">
      <div className='character-input-wrapper'>
      <CharacterForm/>
        <input
        className='character-input-bar'
        onChange={(e)=>setCharacter(e.target.value)}
        placeholder='Add character'
        />
        <button className ='add-button'onClick={handleAddCharacter} />
        <button className ='add-button'onClick={handleDeleteCharacter} />
      </div>
    </div>
  );
}

export default Characters;
