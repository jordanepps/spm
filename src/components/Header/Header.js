import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
// import logo from '../../img/logo.png';

function Header() {
  return (
    <header>
      <NavLink to="/">
        {/* <img src={logo} alt="Smartphone Medic Logo" /> */}
        Home
      </NavLink>
      <NavLink to="/devices">Devices</NavLink>
    </header>
  );
}

export default Header;
