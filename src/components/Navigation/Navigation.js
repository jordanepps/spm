import React from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Navigation.css';

function Navigation() {
  return (
    <Menu right outerContainerId={'App'} pageWrapId={'main-container'}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/devices">Devices</NavLink>
      <NavLink to="/news">News</NavLink>
    </Menu>
  );
}

export default Navigation;
