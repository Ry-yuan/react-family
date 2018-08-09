import React from 'react';
import {BrowserRouter as Router , Route,Switch,Link} from 'react-router-dom';
import Bundle from './Bundle';


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
    <div>
        <Route path="/home/userinfo" component={createComponent(UserInfo)}/>
        <Route path="/home/counter" component={createComponent(Counter)} />
        <Route path="/home/todolist" component={createComponent(Todolist)} />
    </div>
  )
}

export default getRouter;