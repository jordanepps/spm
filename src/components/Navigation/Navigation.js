import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Navigation.css';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(null);

  useEffect(() => {
    setMenuOpen(false);
  }, [menuOpen]);

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }
  return (
    <Menu
      right
      outerContainerId={'App'}
      pageWrapId={'main-container'}
      isOpen={menuOpen}
    >
      <NavLink to="/" onClick={handleMenu}>
        Home
      </NavLink>
      <NavLink to="/about" onClick={handleMenu}>
        About
      </NavLink>
      <NavLink to="/devices" onClick={handleMenu}>
        Devices
      </NavLink>
      <NavLink to="/news" onClick={handleMenu}>
        News
      </NavLink>
    </Menu>
  );
}

export default Navigation;
