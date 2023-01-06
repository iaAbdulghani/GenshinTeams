import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'


export default function Navbar() {
  return (
    <nav className='bar'>
        
        <ul className='routes'>
            <NavLink to="/">Characters</NavLink>
          
        </ul>

    </nav>
  )
}
