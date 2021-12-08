import React from 'react';
import { useSelector } from 'react-redux';

const MovieDetail = function ({ title }) {
  // const movie = useSelector((state) => state.movie);
  return (
    <div className="movie">
      <h1 className="movie-title">{title}</h1>
    </div>
  );
};

export default MovieDetail;
