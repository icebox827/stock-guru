import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducers from './reducers/index';

const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;