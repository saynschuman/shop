import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer/index'

export function store() {
  return createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}
