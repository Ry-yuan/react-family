import React , {Component} from 'react';
import {addTodoList,resetTodoList,changeTodoList,deleteTodoList} from '../../redux/action/todolistAction';
import {connect} from 'react-redux';
import {message as Message , Button, Input ,Row ,Col} from 'antd';
import TodoListItem from './TodoListItem/TodoListItem';
import './style.css';

class Todolist extends Component {
  state = {
    todoText:''
  }

  generatorList(){
    const props = {
      onChange:this.handleFinishList,
      onDelete:this.handleDeleteList
    }
    return(
      <div>
        {this.props.todolist.map((item)=>{
          return <TodoListItem key={item.id} {...item} {...props} />
        })}
      </div>
    )
  }

  generatorListInputBar(){
    return(
      <Row type="flex" align="middle">
          <Col span={15}>
            <Input placeholder="输入任务" value={this.state.todoText} onChange={this.handleTodoInput} />
          </Col>
          <Col span={3} offset={1}>
           <Button type="primary" onClick={this.handleAddToDoList}>添加任务</Button>
          </Col>
          <Col span={3} offset={1}>
            <Button onClick={this.props.resetTodoList}>重置列表</Button>
          </Col>
        </Row>
    )
  }

  handleTodoInput = (e)=>{
    e.preventDefault();
    this.setState({
      todoText: e.target.value
    })
  }

  handleAddToDoList = ()=>{
    if(this.state.todoText.length === 0){
      Message.error('任务不能为空');
      return;
    }
    const {todoText} = this.state;
    let time = new Date();
    const item = {id:time.getTime(),todoText,finish:false}
    this.props.addTodoList(item);
    this.setState({
      todoText:''
    })
  }

  handleFinishList= (id)=>{
    this.props.changeTodoList(id);
  }

  handleDeleteList = (id)=>{
    this.props.deleteTodoList(id);
  }

  render(){
    return (
      <div className="todolist-wrapper">
        {this.generatorListInputBar()}
        {this.generatorList()}
      </div>
    )
  }
}

const mapStateToProps = (state)=>{
  return{
    todolist:state.todolist
  }
}

const mapDispatchToProps = (dispatch)=>{
  return{
    addTodoList:(item)=>{
      // console.log(item);
      dispatch(addTodoList(item));
    },
    resetTodoList:()=>{
      dispatch(resetTodoList());
    },
    changeTodoList:(id)=>{
      dispatch(changeTodoList(id))
    },
    deleteTodoList:(id)=>{
      dispatch(deleteTodoList(id))
    }
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(Todolist);