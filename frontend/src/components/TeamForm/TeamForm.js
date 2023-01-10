import React from 'react'
import Select from 'react-select'
import {useState, useEffect} from 'react'
import "./TeamForm.css"

export default function TeamForm({characters,number, selected, setCharacter},) {
    const [members, setMembers]=useState([])

    const getData =  async () => {
        const arr = [];
          characters.map( (character) => {
              arr.push({value: character, label: character.name})
          });
           setMembers(arr)

      };
    useEffect(() => {

        getData();
      }, [characters]);

      function handleChange(val){
        setCharacter(val)
      }
  return (
    <div className="character-input">
   
        <Select value={selected} placeholder={"Character "+number} options={members} onChange={handleChange}/>

        
        </div>
  )
}
