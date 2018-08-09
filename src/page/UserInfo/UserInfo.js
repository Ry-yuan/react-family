import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../redux/action/userInfoAction';
import { Button } from 'antd';

class UserInfo extends Component {
  render() {
    const { userInfo, loading, errorMsg } = this.props.userInfo;
    return (
      <div className="userinfo-wrapper">
        {
          loading ? '请求信息中......' :
            (
              errorMsg ? errorMsg :
                <div>
                  <p>用户信息：{userInfo.message}</p>
                  <p>用户名：{userInfo.user}</p>
                  <p>介绍：{userInfo.info}</p>
                </div>
            )
        }
        <Button type="primary" onClick={() => this.props.getUserInfo()}>请求用户信息</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userInfo
  }
}

const mapDispatchToProps = ({ getUserInfo });

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);