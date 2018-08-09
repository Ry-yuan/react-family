import React, { Component } from 'react';
// 引入action
import { increment, decrement, reset } from '../../redux/action/counterAction';
import { connect } from 'react-redux';
import {Button} from 'antd';
class Counter extends Component {
  render() {
    return (
      <div>
        <div>当前的计数为:{this.props.count}</div>
        <Button onClick={()=>this.props.increment()}>自增</Button>
        <Button onClick={()=>this.props.decrement()}>自减</Button>
        <Button onClick={()=>this.props.reset()}>重置</Button>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    count: state.count
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    increment:()=>{
      dispatch(increment());
    },
    decrement:()=>{
      dispatch(decrement());
    },
    reset:()=>{
      dispatch(reset());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);