import {createStore, applyMiddleware} from 'redux';
import Reducers from './combineReducer';
import thunkMiddleware from 'redux-thunk';

let store = createStore(Reducers, applyMiddleware(thunkMiddleware));

export default store;