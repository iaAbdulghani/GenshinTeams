import React from 'react'
import axios from "axios"





export default function CharacterDisplay({curr}) {
    return(
        <div>
        {curr.name}
        <img src={curr.pic}/>
    </div>
    )

  
}
