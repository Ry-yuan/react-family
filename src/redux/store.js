import {createStore, applyMiddleware} from 'redux';
import Reducers from './combineReducer';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger();
let store = createStore(Reducers, applyMiddleware(thunkMiddleware,loggerMiddleware));

export default store;