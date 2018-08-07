import {ADD_TO_LIST,RESET_TODO_LIST} from '../action/todolistAction';

// reducer是一个纯函数，用于处理action，接受state和action两个参数
function todoList (state=[],action){
  switch(action.type){
    case ADD_TO_LIST:{
      return [].concat([...state],{text:action.text});
    }
    case RESET_TODO_LIST:{
      return [];
    }
    default: return state;
  }
}

export default todoList;
