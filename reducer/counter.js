import {INCREMENT, DECREMENT} from '../constants'

const exampleInitialState = {
  count: 0,
};

const counter = (state = exampleInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
        return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default counter
