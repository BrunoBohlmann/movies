import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovies } from '../../actions';
import './SearchBar.css';

const SearchBar = function () {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      dispatch(getMovies(name));
    }
  };

  const handleInputChange = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    setName(e.target.value);
  };
  return (
    <div className="searchbar">
      <form>
        <label htmlFor="xd">
          <input
            type="text"
            placeholder="Movie..."
            value={name}
            onChange={(e) => handleInputChange(e)}
          />
        </label>

        <button
          className="search"
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
