// 引入react react-dom
import React from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import getRouter from './router/router';
import store from './redux/store';

ReactDom.render(
  <Provider store={store}>
  {getRouter()}
  </Provider>,
  document.getElementById('app')
)