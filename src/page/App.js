import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
const { Header, Content } = Layout;
import { Link , Route ,Switch} from 'react-router-dom';
import Home from './Home/Home';
import UserInfo from './UserInfo/UserInfo.js'

export default class App extends Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">
              <span>Home</span>
              <Link to="/home" />
            </Menu.Item>
            <Menu.Item key="2">
              <span>About</span>
              <Link to="/about" />
            </Menu.Item>
            <Menu.Item key="3">
              <span>More</span>
              <Link to="/more" />
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 480 }}>
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={UserInfo} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
