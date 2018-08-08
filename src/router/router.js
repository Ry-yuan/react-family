import React from 'react';
import {BrowserRouter as Router , Route,Switch,Link} from 'react-router-dom';
import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!../page/Home/Home';
import Counter from 'bundle-loader?lazy&name=counter!../page/Counter/Counter';
import Todolist from 'bundle-loader?lazy&name=todolist!../page/Todolist/Todolist';
import UserInfo from 'bundle-loader?lazy&name=userinfo!../page/UserInfo/UserInfo';

const Loading = function () {
  return <div>Loading...</div>
};

const createComponent = (component) => (props) => (
  <Bundle load={component}>
      {
          (Component) => Component ? <Component {...props} /> : <Loading/>
      }
  </Bundle>
);

const getRouter = ()=>{
  return(
    <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/todolist">Todolist</Link></li>
        <li><Link to="/userinfo">Userinfo</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={createComponent(Home)} />
        <Route path="/counter" component={createComponent(Counter)} />
        <Route path="/todolist" component={createComponent(Todolist)} />
        <Route path="/userinfo" component={createComponent(UserInfo)}/>
      </Switch>
    </div>
    </Router>
  )
}

export default getRouter;