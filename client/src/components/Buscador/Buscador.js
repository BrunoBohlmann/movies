import React, { Suspense, lazy, useEffect } from 'react';
import './Buscador.css';
import { useSelector, useDispatch } from 'react-redux';

// Recursos

// Actions import

// Componentes
import NavBar from '../NavBar/NavBar';
import Message from '../Message/Message';
import Loader from '../Loader/Loader';

const Cards = lazy(() => import('../Cards/Cards'));

const Buscador = function () {
  const dispatch = useDispatch();

  const moviesResult = useSelector((state) => state.moviesResult);
  const error = useSelector((state) => state.error);

  useEffect(() => {}, [dispatch]);

  return (
    <div className="buscador">
      <NavBar />
      {(() => {
        if (error) {
          return <Message />;
        }
        if (moviesResult) {
          return (
            <Suspense fallback={<Loader />}>
              <Cards
                Search={moviesResult.Search}
                Response={moviesResult.Response}
                Error={moviesResult.Error}
              />
            </Suspense>
          );
        }
        return (
          <div>
            <h2>No movies to show now</h2>
          </div>
        );
      })()}
    </div>
  );
};

export default Buscador;
