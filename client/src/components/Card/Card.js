import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

const Card = function ({ title, img, id }) {
  return (
    <div className="card">
      <Link to={`/movie/${id}`} className="card-link">
        <div className="card-title">
          <h4>{title}</h4>
        </div>

        <div className="card-img">
          <img src={img} alt="Movie source" />
        </div>
      </Link>
    </div>
  );
};

export default Card;
