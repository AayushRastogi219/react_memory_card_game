import React from 'react'
import { NavLink } from 'react-router-dom'

const logo = require('./images/logo.svg').default


const Header = ({ className, displayTimer, errorCount }) => {
return (
  <header className={className}>
    <div className="Header__logo">
      <img
        alt="logo"
        className="Header__logoImage"
        src={logo}
      />
      Memory game
    </div>
        <span>Timer: {displayTimer}</span> 
        <span>Error count: {errorCount}</span>
    <NavLink to="/" className="backToMenuLink">
      Back to main menu
    </NavLink>
  </header>
)}

export default Header
