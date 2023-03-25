import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NavDropdown } from 'react-bootstrap'

import './Navbar.css'

import { GiRocketThruster } from 'react-icons/gi'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { AiOutlineCoffee } from 'react-icons/ai'
import { AiOutlineLaptop } from 'react-icons/ai'

import gd from '../../assets/logo-gd.png'
import logoG from '../../assets/logo-g.png'

import { setTheme } from '../helpers/Theme'
import { getTheme } from '../helpers/Theme'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'


function Navbar() {

  const [click, setClick] = useState(false)


  const handleClick = () => {
    setClick(!click)
  }
  const closeMobileMenu = () => {
    setClick(false)
  }
  const setsLightTheme = () => {
    setTheme('light')
  }
  const setsDarkTheme = () => {
    setTheme('dark')
  }

  const [BG, setBG] = useState('black')
  const [oppBG, setOppBG] = useState('white')
  const [col, setCol] = useState('green')

  let theme = 'dark'

  const timer = setInterval(() => {
    theme = getTheme()
    if (theme === 'dark') {
      setBG('black')
      setOppBG('white-bg')
      setCol('white-color')
    } else {
      setBG('white')
      setOppBG('dark-bg')
      setCol('dark-color')
    }
  }, 50)




  return (
    <>
      <IconContext.Provider value={BG === 'black' ? { color: 'white' } : { color: 'black' }}>
        <nav className={'navbar ' + BG}>
          <div className='.navbar-container container nav-item'>
            <div className='nav-flexo'>
              <Link to="/" className={'navbar-logo item-special ' + col} onClick={closeMobileMenu}>
                {/* <AiOutlineLaptop className={'navbar-icon item-special ' + oppBG} width='100px' /> */}
                {/* <span>Home</span> */}
                <img src={logoG} alt="gael" width='50px' />
              </Link>
              <NavDropdown width='10' title="Theme" id="basic-nav-dropdown" data-toggle="collapse" data-target=".navbar-collapse" className={'spec dropdowm-toggle ' + col}>
                <DropdownItem className='drop'>                <p onClick={setsLightTheme}>🔲 light</p>
                </DropdownItem>
                <DropdownItem className='drop'>                <p onClick={setsDarkTheme}>🔳 dark</p>
                </DropdownItem>
              </NavDropdown>
            </div>

            <div className={'menu-icon ' + BG} onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active ' + BG : 'nav-menu ' + BG}>
              <li className={'nav-item ' + col}>
                <NavLink to='/about-me' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')}
                  onClick={closeMobileMenu}
                >
                  About me
                </NavLink>
              </li>
              <li className={'nav-item ' + col}>
                <NavLink to='/skills' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')}
                  onClick={closeMobileMenu}
                >
                  Skills
                </NavLink>
              </li>
              <li className={'nav-item ' + col}>
                <NavLink to='/projects' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')}
                  onClick={closeMobileMenu}
                >
                  Projects
                </NavLink>
              </li>
              <li className={'nav-item ' + col}>
                <NavLink to='/interests' className={({ isActive }) => 'nav-links' + (isActive ? ' activated' : '')}
                  onClick={closeMobileMenu}
                >
                  Interests
                </NavLink>
              </li>
              <li className={'nav-item ' + col}>
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