import React from 'react'
import {link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className='navbar'>
    <ul className='nav-links'>
    <link to="/" className='home'>
        <li>Home</li>
    </link>
    <link to="/Projects" className='projects'>
        <li>Projects</li>
    </link>
    <link to="/Sevices" className='services'>
        <li>Services</li>
    </link>
    <link to="/Contact" className='contact'>
        <li>Contact</li>
    </link>
    </ul>       
     </nav>
    )
}

export default Navbar