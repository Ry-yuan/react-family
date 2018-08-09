import React, { Component } from 'react';
import { Link ,Route ,Switch} from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import Counter from '../Counter/Counter';
import Todolist from '../Todolist/Todolist';
import UserInfo from '../UserInfo/UserInfo';
const { SubMenu } = Menu;
const {  Content,  Sider } = Layout;

export default class Home extends Component {
  render() {
    return (
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" title={<span><Icon type="user" />Option</span>}>
              <Menu.Item key="1"><Link to="/home/userInfo" />userInfo</Menu.Item>
              <Menu.Item key="2"><Link to="/home/counter" />counter</Menu.Item>
              <Menu.Item key="3"><Link to="/home/todolist" />todolist</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          <Switch>
            <Route path="/home/userInfo" component={UserInfo} />
            <Route path="/home/counter" component={Counter} />
            <Route path="/home/todolist" component={Todolist} />
          </Switch>
        </Content>
      </Layout>
    )
  }
}