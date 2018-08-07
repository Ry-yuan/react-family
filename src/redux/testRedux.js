import {increment , decrement , reset } from './action/counter';
import store from './store'

// 打印初始状态
console.log(store);

// 每次state更新，打印日志
let unsubscribe = store.subscribe(()=>{
  console.log(store.getState())
});

// 发起一系列的action
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

// 停止监听
unsubscribe();
