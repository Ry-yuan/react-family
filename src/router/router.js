import React from 'react';
import {BrowserRouter as Router , Route,Switch,Link} from 'react-router-dom';

import Home from '../page/Home/Home';
import Counter from '../page/Counter/Counter';
import Todolist from '../page/Todolist/Todolist';

const getRouter = ()=>{
  return(
    <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/todolist">Todolist</Link></li>
      </ul>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/counter" component={Counter} />
        <Route path="/todolist" component={Todolist} />
      </Switch>
    </div>
    </Router>
  )
}

export default getRouter;