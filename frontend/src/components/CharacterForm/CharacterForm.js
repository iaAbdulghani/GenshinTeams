import React from 'react'
import axios from "axios"
import {useState, useEffect } from 'react'
import Select from 'react-select';
import "./CharacterForm.css"





export default function CharacterForm({currCharacter, setCharacter}) {
    
    const [characters, setCharacters] = useState([""])

    function handleChange(event){
        setCharacter(event)
    }

useEffect(() => {
    const getData =  async () => {
      const arr = [];
      await axios.get('https://genshin.jmp.blue/characters/').then(async (res) => {
        let result = res.data;

        result.map(async (fakeName) => {
            await axios.get(`https://genshin.jmp.blue/characters/${fakeName}`).then((res2)=>{
                let realName = res2.data.name
                return arr.push({value: fakeName, label: realName});
            })
        });
        
         setCharacters(arr)
      });
    };
    getData();
  }, []);
    

  return (
    
    <div className="select">
        <Select 
  placeholder= "Select an individual"
  options={characters} 
  value={currCharacter} onChange={handleChange}/>
  </div>

  )
}
