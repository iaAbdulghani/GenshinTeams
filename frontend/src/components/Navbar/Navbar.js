import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'


export default function Navbar() {
  return (
    <nav className='bar'>
        
        <ul className='routes'>
            <NavLink to="/characters">Characters</NavLink>
            <NavLink to="/teams">Teams</NavLink>
          
        </ul>

    </nav>
  )
}
