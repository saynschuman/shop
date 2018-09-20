import {GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_ERROR} from "../constants";

const initialStateProperty = {
    results: {},
    isLoading: true,
    isLoaded: false,
    textError: ""
}

export default function(state = initialStateProperty, action) {
    const { type, payload } = action
    switch (type) {
        case GET_DATA_REQUEST: return { ...state, isLoading: true}
        case GET_DATA_SUCCESS: return { ...state, isLoading: false, isLoaded: true, results: payload.data}
        case GET_DATA_ERROR: return { ...state, isLoading: false, isLoaded: true, results: payload.error, textError: payload.error}
        default:
            return state
    }
}