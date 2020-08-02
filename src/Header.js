import React from 'react';
import logo from './assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <NavLink to='/'>
          <img src={logo} alt='logo' />
        </NavLink>
        <nav>
          <ul>
            <li><NavLink to="#">About me</NavLink></li>
            <li><NavLink to="#">Relationships</NavLink></li>
            <li><NavLink to="#">Requirements</NavLink></li>
            <li><NavLink to="#">Users</NavLink></li>
            <li><a href="#register">Sign Up</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;