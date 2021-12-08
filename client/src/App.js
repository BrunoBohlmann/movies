import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Componentes
import Buscador from './components/Buscador/Buscador';
import Movie from './components/Movie/Movie';

const App = function () {
  return (
    <Routes>
      <Route exact path="/" element={<Buscador />} />
      <Route exact path="/movie/:id" element={<Movie />} />
    </Routes>
  );
};

export default App;
