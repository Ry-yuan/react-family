export const ADD_TO_LIST = 'ADD_TO_LIST';
export const CHANGE_TO_LIST = 'CHANGE_TO_LIST';
export const RESET_TODO_LIST = 'RESET_TODO_LIST';
export const DELETE_TODO_LIST = "DELETE_TODO_LIST";

export function addTodoList(item) {
  return {
    type: ADD_TO_LIST,
    item:item
  };
}

export function changeTodoList(id){
  return{
    type: CHANGE_TO_LIST,
    id:id
  }
}

export function deleteTodoList(id){
  return{
    type: DELETE_TODO_LIST,
    id:id
  }
}

export function resetTodoList(){
  return{
    type: RESET_TODO_LIST,
  }
}
