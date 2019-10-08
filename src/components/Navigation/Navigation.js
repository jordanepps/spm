import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import TokenService from '../../services/token-service';
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

  function handleLogout() {
    setMenuOpen(!menuOpen);
    TokenService.clearAuthToken();
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

  function renderPrivateNav() {
    return (
      <Menu
        right
        outerContainerId={'App'}
        pageWrapId={'main-container'}
        isOpen={menuOpen}
      >
        <NavLink to="/inventory-manager" onClick={handleMenu}>
          Inventory Home
        </NavLink>
        <NavLink to="/inventory-manager/settings" onClick={handleMenu}>
          Settings
        </NavLink>
        <p className="bm-item" onClick={handleLogout}>
          Logout
        </p>
      </Menu>
    );
  }

  return page ? renderNav() : renderPrivateNav();
}

export default Navigation;
