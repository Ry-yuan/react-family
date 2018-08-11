import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link ,Route ,Switch} from 'react-router-dom';
import { Layout, Menu, Icon ,Row , Col } from 'antd';
import Counter from '../Counter/Counter';
import Todolist from '../Todolist/Todolist';
import TodolistFinish from '../Todolist/TodolistFinish/TodoListFinish';
import TodolistUnfinish from '../Todolist/TodoListUnfinish/TodoListUnfinish';
import UserInfo from '../UserInfo/UserInfo';
const { SubMenu } = Menu;
const {  Content,  Sider } = Layout;

class Home extends Component {
  state={
    finishCount:0,
    unfinishCount:0
  }

  render() {
    return (
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" title={<span><Icon type="setting" />功能集合</span>}>
              <Menu.Item key="1"><Link to="/home/userInfo" />个人信息</Menu.Item>
              <Menu.Item key="2"><Link to="/home/counter" />计数器</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="book" />任务</span>}>
              <Menu.Item key="3"><Link to="/home/todolist/new" />新建任务</Menu.Item>
              <Menu.Item key="5"><Link to="/home/todolist/finish" />已完成任务({this.getFinishCount()})</Menu.Item>
              <Menu.Item key="4"><Link to="/home/todolist/unfinish" />待完成任务({this.getUnfinishCount()})</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Switch>
            <Route path="/home/userInfo" component={UserInfo} />
            <Route path="/home/counter" component={Counter} />
            <Route path="/home/todolist/new" component={Todolist} />
            <Route path="/home/todolist/finish" component={TodolistFinish} />
            <Route path="/home/todolist/unfinish" component={TodolistUnfinish} />
          </Switch>
        </Content>
      </Layout>
    )
  }

  getFinishCount(){
    const {todolist} = this.props;
    let num = 0 ; 
    todolist.forEach(element => {
      if(element.finish){
        num++;
      }
    });
   return num;
  }

  getUnfinishCount(){
    const {todolist} = this.props;
    return (todolist.length - this.getFinishCount());
  }
}

const mapStateToProps = (state)=>{
  return{
    todolist:state.todolist
  }
}   

export default connect(mapStateToProps)(Home);