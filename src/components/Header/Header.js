import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../img/logo.png';

function Header() {
  return (
    <header>
      <NavLink to="/" className="logo">
        <img src={logo} alt="Smartphone Medic Logo" />
      </NavLink>
      {/* <NavLink to="/devices">Devices</NavLink>
      <NavLink to="/news">News</NavLink> */}
    </header>
  );
}

export default Header;
