import React , {Component} from 'react';
import {Col,Row,Checkbox,Button} from 'antd';
import '../style.css';

export default class TodoListItem extends Component {
  render(){
    const {id ,todoText , finish , onChange , onDelete} = this.props;
    return (
      <div className={finish?"todolist-box-finish":"todolist-box-unfinished"} >
        <Row  type="flex" align="middle">
          <Col span={1}>
            <Checkbox checked={finish}  onChange={()=>{onChange(id)}} />
          </Col>
          <Col span={18}>
            <span className={finish?"todolist-text-finish":"todolist-text"} >{todoText}</span>
          </Col>
          <Col span={3} offset={2}>
            <Button type="danger" onClick={()=>{onDelete(id)}}>Delete</Button>
          </Col>
        </Row>
      </div>
    )
  }
}

