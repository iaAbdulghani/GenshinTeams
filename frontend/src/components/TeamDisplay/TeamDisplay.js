import React from 'react'
import axios from "axios"
import {useState, useEffect } from 'react'
import Select from 'react-select';
import "./TeamDisplay.css"





export default function TeamDisplay({currentTeam,allCharacters, handleDelete}) {
    const [character1, setCharacter1] = useState("")
    const [character2, setCharacter2] = useState("")
    const [character3, setCharacter3] = useState("")
    const [character4, setCharacter4] = useState("")

    useEffect(()=>{
        for(let i=0;i<allCharacters.length;i++){
            if(allCharacters[i]._id==currentTeam.character1){
                setCharacter1(allCharacters[i])
            }
            if(allCharacters[i]._id==currentTeam.character2){
                setCharacter2(allCharacters[i])
            }
            if(allCharacters[i]._id==currentTeam.character3){
                setCharacter3(allCharacters[i])
            }
            if(allCharacters[i]._id==currentTeam.character4){
                setCharacter4(allCharacters[i])
            }
        }
        
        
    },[currentTeam])
   let imgUrl1, imgUrl2, imgUrl3, imgUrl4 
    if(character1!=""){
        imgUrl1 = `https://genshin.jmp.blue/characters/${character1.apiName}/icon-big`
    }
   if(character2!=""){
    imgUrl2 = `https://genshin.jmp.blue/characters/${character2.apiName}/icon-big`
   }
   if(character3 !=""){
    imgUrl3 = `https://genshin.jmp.blue/characters/${character3.apiName}/icon-big`
   }
   if(character4!=""){
    imgUrl4 = `https://genshin.jmp.blue/characters/${character4.apiName}/icon-big`
   }
   
    
    
   
    return(
        <div className="display2">
            <button onClick={()=>handleDelete(currentTeam._id)}>X</button>
            <div className="character-display">
       
            <img src={imgUrl1}/>
            </div>
            <div className="character-display">
            
            <img src={imgUrl2}/>
            </div>
            <div className="character-display">
       
            <img src={imgUrl3}/>
            </div>
            <div className="character-display">
           
            <img src={imgUrl4}/>
            </div>
           
            
        </div>
    )

  
}
