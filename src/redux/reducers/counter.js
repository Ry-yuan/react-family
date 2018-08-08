// reducer 是纯函数
import {INCREMENT , DECREMENT , RESET}  from '../action/counterAction';

/**
 * 初始化state
 */

/**
* reducer
*/

export default function reducer(state = 0 , action ){
  switch (action.type){
    case INCREMENT :
      return  state + 1;
    case DECREMENT :
      return  state - 1
    case RESET:
      return 0
    default:
      return state
  }
}
