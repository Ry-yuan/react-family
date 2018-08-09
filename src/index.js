// 引入react react-dom
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import App from '../src/page/App'

ReactDom.render(
  <Provider store={store}>
      <Router>
          <App/>
      </Router>
  </Provider>,
  document.getElementById('app')
)