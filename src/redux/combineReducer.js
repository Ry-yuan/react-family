// 整合reducer
import counter from './reducers/counter';
import todolist from './reducers/todolistReducer';
import userInfo from './reducers/userInfoReducer';
import {
  combineReducers
} from 'redux';

const Reducers = combineReducers({
  count: counter,
  todolist,
  userInfo
})

export default Reducers;