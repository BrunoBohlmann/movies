import React from 'react';
import Card from '../Card/Card';

const Cards = function ({ Search, Error = 'Something went wrong', Response }) {
  if (Response === 'False') {
    return (
      <div>
        <h2>{Error}</h2>
      </div>
    );
  }
  return (
    <div className="cards">
      {Search?.map((e) => (
        <Card id={e.imdbID} title={e.Title} img={e.Poster} />
      ))}
    </div>
  );
};

export default Cards;
