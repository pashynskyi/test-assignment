import React from 'react';
import logo from './assets/images/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt='logo' />
        <nav>
          <ul>
            <li><a href="#">About me</a></li>
            <li><a href="#">Relationships</a></li>
            <li><a href="#">Requirements</a></li>
            <li><a href="#">Users</a></li>
            <li><a href="#">Sign Up</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;