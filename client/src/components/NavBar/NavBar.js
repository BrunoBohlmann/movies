import React from 'react';
import './NavBar.css';
import SearchBar from '../SearchBar/SearchBar';

const NavBar = function () {
  return (
    <div className="navbar">
      <ul className="navbar-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <SearchBar />
      </ul>
    </div>
  );
};

export default NavBar;
