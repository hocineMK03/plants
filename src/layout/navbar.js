import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaRegMessage } from "react-icons/fa6";
import '../styles/layout/navbar.css'
const NavBar = () => {
    const [menuOpen,setMenuOpen]=useState(false)
  return (
    <nav className='navbar'>
<div className='menu' onClick={()=>{
setMenuOpen(!menuOpen)
}}>
<span></span>
<span></span>

<span></span>

</div>
        <div className='navbar-container'>
        <div className='navbar-logo'>
        <h2 id='plant'>plant</h2>
        <h2 id='s'>S</h2>
        </div>
        <ul className={menuOpen ? "open" : ""}>
        <li>
                <NavLink to='/'>Plant</NavLink>
            </li>
            <li>

    <NavLink to='/about'>About</NavLink>
            </li>
            <li>
    <NavLink to='/pricing'>Pricing</NavLink>
            </li>
            <li>
    <NavLink to='/shop'>Shop</NavLink>
            </li>

        </ul>
            <div className='navbar-buttons' >
                <span>Contact Us</span>
                <div><FaRegMessage /></div>
            </div>
        </div>



    </nav>
  )
}

export default NavBar
