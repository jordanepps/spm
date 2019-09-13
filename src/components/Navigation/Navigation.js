import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Navigation.css';

import { PageContext } from '../../context/Context';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(null);
  const [page] = useContext(PageContext);

  useEffect(() => {
    setMenuOpen(false);
  }, [menuOpen]);

  function handleMenu() {
    setMenuOpen(!menuOpen);
  }

  function renderNav() {
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

  // return (
  //   <Menu
  //     right
  //     outerContainerId={'App'}
  //     pageWrapId={'main-container'}
  //     isOpen={menuOpen}
  //   >
  //     <NavLink to="/" onClick={handleMenu}>
  //       Home
  //     </NavLink>
  //     <NavLink to="/about" onClick={handleMenu}>
  //       About
  //     </NavLink>
  //     <NavLink to="/devices" onClick={handleMenu}>
  //       Devices
  //     </NavLink>
  //     <NavLink to="/news" onClick={handleMenu}>
  //       News
  //     </NavLink>
  //   </Menu>
  // );
  return page ? renderNav() : '';
}

export default Navigation;
