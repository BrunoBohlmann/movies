import React from 'react';
import './NavBar.css';
import { useAuth0 } from '@auth0/auth0-react';

// MaterialUI
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles, styled } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import Box from '@mui/material/Box';

// Components
import SearchBar from '../SearchBar/SearchBar';

// Autenticacion
import { LoginButton } from '../Auth0/Login';
import { LogoutButton } from '../Auth0/Logout';
import { Profile } from '../Auth0/Profile';

// MaterialUI Styles
const useStyles = makeStyles((theme) => ({}));

// Evita que la NavBar tape otros elementos
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

const NavBar = function () {
  // Auth0
  const { isAuthenticated } = useAuth0();
  // Styles de MUI
  const classes = useStyles();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Movies
            </Typography>
            <SearchBar />
            {isAuthenticated ? (
              <>
                <LogoutButton />
                <Profile />
              </>
            ) : (
              <LoginButton />
            )}
          </Toolbar>
        </AppBar>
        <Offset />
      </Box>
    </div>
  );
};

export default NavBar;
