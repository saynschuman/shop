import { INCREMENT, DECREMENT } from '../constants';

export const increment = () => dispatch => {
  return dispatch({ type: INCREMENT });
};

export const decrement = () => dispatch => {
    return dispatch({ type: DECREMENT });
};
