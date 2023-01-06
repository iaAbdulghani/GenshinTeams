import React from 'react'
import axios from "axios"
import {useState, useEffect } from 'react'
import Select from 'react-select';





export default function CharacterForm() {

    const [characters, setCharacters] = useState([""])

useEffect(() => {
    const getData =  async () => {
      const arr = [];
      await axios.get('https://api.genshin.dev/characters/').then(async (res) => {
        let result = res.data;

        result.map(async (fakeName) => {
            await axios.get(`https://api.genshin.dev/characters/${fakeName}`).then((res2)=>{
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
    
   
        <Select
  placeholder= "Select an individual"
  options={characters}/>

  )
}
