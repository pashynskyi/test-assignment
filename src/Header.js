import React from 'react';
import logo from './assets/images/logo.svg';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
  state = {
    activeClass: false //header-burger
  }

  toggleActiveClass = () => {
    this.setState({ activeClass: !this.state.activeClass })
  }

  render() {
    return (
      <header className="header">
        <div className="header-content">
          <NavLink to='/'>
            <img src={logo} alt='logo' />
          </NavLink>
          <div
            className={!this.state.activeClass ? "header-burger" : "header-burger active"}
            onClick={this.toggleActiveClass}>
            <span></span>
          </div>
          <nav className={!this.state.activeClass ? "header-menu" : "header-menu active"}>
            <div className="list-container">
              <ul>
                <li><NavLink to="#">About me</NavLink></li>
                <li><NavLink to="#">Relationships</NavLink></li>
                <li><NavLink to="#">Requirements</NavLink></li>
                <li><NavLink to="#">Users</NavLink></li>
                <li><a onClick={this.toggleActiveClass} href="#register">Sign Up</a></li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default Header;