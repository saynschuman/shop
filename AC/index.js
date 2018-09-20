import { INCREMENT, DECREMENT, GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_ERROR } from '../constants';
import axios from 'axios'

export const increment = () => dispatch => {
  return dispatch({ type: INCREMENT });
};

export const decrement = () => dispatch => {
    return dispatch({ type: DECREMENT });
};

export const loadArticles = () => async dispatch => {
    dispatch({
        type: GET_DATA_REQUEST,
    });
    try {
        const response = await axios.get('http://api.tvmaze.com/search/shows?q=batman');
        return dispatch({
            type: GET_DATA_SUCCESS,
            payload: {
                data: response.data,
            },
        });
    } catch (error) {
        throw dispatch({
            type: GET_DATA_ERROR,
            payload: {
                error,
            },
        });
    }
};

