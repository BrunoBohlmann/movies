import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// MaterialUI y Visual
import './SearchBar.css';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import InputBase from '@mui/material/InputBase';

// Actions
import { getMovies } from '../../actions';

// Styles de MaterialUI
const useStyle = makeStyles({});

// SearchBar Styled
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },
  marginRight: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto'
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}));

const SearchBar = function () {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [searchPlaceHolder, setSearchPlaceHolder] = useState('');
  const classes = useStyle();

  // Input onChange
  useEffect(() => {
    if (!name) {
      setSearchPlaceHolder('Movie...');
    }
    console.log(name);
    const timeOutId = setTimeout(() => dispatch(getMovies(name)), 50);
    return () => clearTimeout(timeOutId);
  }, [name]);

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder={searchPlaceHolder}
        value={name}
        onChange={(e) => setName(e.target.value)}
        inputProps={{ 'aria-label': 'search' }}
      />
    </Search>
  );
};

export default SearchBar;
