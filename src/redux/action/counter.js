// ation

export const INCREMENT = 'INCREMENT_COUNTER';
export const DECREMENT = 'DECREMENT_COUNTER';
export const RESET = 'RESET_COUNTER';

export function increment(){
  return {type: INCREMENT}
}

export function decrement(){
  return {type: DECREMENT};
}

export function reset(){
  return {type: RESET};
}
