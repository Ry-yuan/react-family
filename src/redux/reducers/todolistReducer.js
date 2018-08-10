import {ADD_TO_LIST,CHANGE_TO_LIST,DELETE_TODO_LIST,RESET_TODO_LIST} from '../action/todolistAction';

// reducer是一个纯函数，用于处理action，接受state和action两个参数
/**
 * todolist:[
 *  {
 *    id:[String]
 *    todoText:[String]
 *    finish:[boolean]
 *  }
 * ]
 */
function todoList (state=[],action){
  switch(action.type){
    case ADD_TO_LIST:{
      return [].concat([...state],action.item);
    }
    case CHANGE_TO_LIST:{
      let _state = state.concat();
      _state.map(item=>{
        if(item.id === action.id){
          item.finish = !item.finish;
        }
      })
      return _state;
    }
    case DELETE_TODO_LIST:{
      let _state = state.concat();
      _state.map((item,index)=>{
        if(item.id === action.id){
          _state.splice(index,1);
        }
      })
      return _state;
    }
    case RESET_TODO_LIST:{
      return [];
    }
    default: return state;
  }
}

export default todoList;
