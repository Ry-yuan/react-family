// 整合reducer
import counter from './reducers/counter';
import todolist from './reducers/todolistReducer';
import {combineReducers }  from 'redux';

const Reducers = combineReducers({
  count:counter,
  todolist
})

export default Reducers;