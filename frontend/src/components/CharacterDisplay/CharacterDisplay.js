import React from 'react'
import "./CharacterDisplay.css"




export default function CharacterDisplay({curr, deleteCharacter}) {
   

    let imgUrl = `https://genshin.jmp.blue/characters/${curr.apiName}/icon-big`
    return(
        <div className="display">
            <button onClick={()=>deleteCharacter(curr._id)}>X</button>
       {curr.name}
       <img src={imgUrl}/>
        <p>{curr.level}</p>
    </div>
    )
}
