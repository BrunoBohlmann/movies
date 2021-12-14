import React from 'react';
import './NavBar.css';
import { useAuth0 } from '@auth0/auth0-react';
import SearchBar from '../SearchBar/SearchBar';

// Autenticacion
import { LoginButton } from '../Auth0/Login';
import { LogoutButton } from '../Auth0/Logout';
import { Profile } from '../Auth0/Profile';

const NavBar = function () {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="navbar">
      <ul className="navbar-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <SearchBar />
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </ul>
    </div>
  );
};

export default NavBar;
