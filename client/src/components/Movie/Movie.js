import React, { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Actions
import { getMovie } from '../../actions/index';

// Components
import NavBar from '../NavBar/NavBar';
import Loader from '../Loader/Loader';
import Message from '../Message/Message';

const MovieDetail = lazy(() => import('./MovieDetail'));

const Movie = function () {
  const { id } = useParams();
  const dispatch = useDispatch();

  const movie = useSelector((state) => state.movie);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    dispatch(getMovie(id));
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      {error ? (
        <Message />
      ) : (
        <Suspense fallback={<Loader />}>
          <MovieDetail title={movie.Title} />
        </Suspense>
      )}
    </div>
  );
};

export default Movie;
