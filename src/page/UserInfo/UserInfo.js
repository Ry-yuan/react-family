import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserInfo } from '../../redux/action/userInfoAction';
import { Button, Card, Icon, Avatar } from 'antd';
const { Meta } = Card;
class UserInfo extends Component {
  render() {
    const { userInfo, loading, errorMsg } = this.props.userInfo;
    return (
      <div>
         <Card
          loading={loading}
          style={{ margin:"0 auto",width:400 }}
          cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
          actions={[<Icon type="setting" />, <Icon type="poweroff" onClick={() => this.props.getUserInfo()} />]}
            >
          <Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={userInfo.user}
            description={userInfo.info}
            />
        </Card>
      </div>
     
      // <div className="userinfo-wrapper">
      //   {
      //     loading ? '请求信息中......' :
      //       (
      //         errorMsg ? errorMsg :
      //           <div>
      //             <p>用户信息：{userInfo.message}</p>
      //             <p>用户名：{userInfo.user}</p>
      //             <p>介绍：{userInfo.info}</p>
      //           </div>
      //       )
      //   }
      //   <Button type="primary" onClick={() => this.props.getUserInfo()}>请求用户信息</Button>
      // </div>
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