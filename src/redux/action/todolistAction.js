export const ADD_TO_LIST = 'ADD_TO_LIST';
export const RESET_TODO_LIST = 'RESET_TODO_LIST';

export function addTodoList() {
  return {
    type: ADD_TO_LIST,
    text:'new text'
  };
}

export function resetTodoList(){
  return{
    type: RESET_TODO_LIST,
  }
}
