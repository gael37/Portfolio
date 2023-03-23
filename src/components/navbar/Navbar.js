import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import './Navbar.css'

import { GiRocketThruster } from 'react-icons/gi'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { AiOutlineCoffee } from 'react-icons/ai'
import { AiOutlineLaptop } from 'react-icons/ai'

import gd from '../../assets/logo-gd.png'

function Navbar() {

  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }
  const closeMobileMenu = () => {
    setClick(false)
  }


  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='.navbar-container container nav-item'>
            <Link to="/" className="navbar-logo item-special" onClick={closeMobileMenu}>
              <AiOutlineLaptop className="navbar-icon item-special" width='100px' />
              <span>gxd</span>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <NavLink to='/about-me' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')}
                  onClick={closeMobileMenu}
                >
                  About me
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/skills' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')}
                  onClick={closeMobileMenu}
                >
                  Skills
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/projects' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')}
                  onClick={closeMobileMenu}
                >
                  Projects
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink to='/contact' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')}
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  )
}

export default Navbar