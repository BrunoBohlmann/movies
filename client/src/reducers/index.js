import { ERROR_CATCH, GET_MOVIES, GET_MOVIE } from '../constants';

const initialState = {
  moviesResult: {},
  movie: {},
  error: false
};

const rootReducer = (state = initialState, { type, payload } = {}) => {
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesResult: payload
      };
    case ERROR_CATCH:
      return {
        ...state,
        error: payload
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: payload
      };
    default:
      return state;
  }
};

export default rootReducer;
