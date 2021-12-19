import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
// Componentes
import { ThemeProvider } from '@mui/material/styles';
import Buscador from './components/Buscador/Buscador';
import Movie from './components/Movie/Movie';
// MaterialUI y mas
import theme from './themeConfig';

const App = function () {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route exact path="/" element={<Buscador />} />
        <Route exact path="/movie/:id" element={<Movie />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
