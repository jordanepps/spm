import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../img/logo.png';

function Header() {
  const [atTop, setAtTop] = useState(null);

  window.addEventListener('scroll', function() {
    setAtTop(window.pageYOffset > 0 ? false : true);
  });

  return (
    <header className={atTop ? 'header' : 'header scrolled'}>
      <NavLink to="/" className="logo">
        <img src={logo} alt="Smartphone Medic Logo" />
      </NavLink>
    </header>
  );
}

export default Header;
