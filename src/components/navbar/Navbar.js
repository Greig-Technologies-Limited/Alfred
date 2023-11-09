import React from 'react'
import { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyling.css'


const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


  return (
    <div name ='top' className='navbar'>
        <div className="container">
            <div className="logo">
                {/* <SiDatabricks className='icon' />
                <h1>Logo</h1> */}
                <div className="logoImg"></div>
                <img src="../../assets/logo.jpg" alt="" />
            </div>
            <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                <li><a href="/">Home</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">About</a></li>
                {/* <li>Recovery</li>
                <li>Cloud</li>
                <li>Contact</li>
                <button>Sign in</button> */}
            </ul>
            <div className="hamburger" onClick={handleNav}>
                {!nav ? (<FaBars className='icon' />):(<FaTimes className='icon' />)}
            </div>
        </div>
    </div>
  )
}

export default Navbar