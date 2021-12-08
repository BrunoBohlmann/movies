import axios from 'axios';
import { GET_MOVIES, ERROR_CATCH, GET_MOVIE } from '../constants';

export function getMovies(movies) {
  return async function (dispatch) {
    try {
      const json = await axios.get(
        `http://www.omdbapi.com/?s=${movies}&apikey=1f6a93ce`
      );
      return dispatch({
        type: GET_MOVIES,
        payload: json.data
      });
    } catch (error) {
      return dispatch({
        type: ERROR_CATCH,
        payload: error
      });
    }
  };
}

export function getMovie(id) {
  return async function (dispatch) {
    try {
      const json = await axios.get(
        `http://www.omdbapi.com/?i=${id}&apikey=1f6a93ce`
      );
      return dispatch({
        type: GET_MOVIE,
        payload: json.data
      });
    } catch (error) {
      return dispatch({
        type: ERROR_CATCH,
        payload: error
      });
    }
  };
}
