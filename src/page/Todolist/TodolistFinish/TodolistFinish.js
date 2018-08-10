import React, {Component} from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';
import {connect} from 'react-redux';
import {changeTodoList,deleteTodoList} from '../../../redux/action/todolistAction';
import '../style.css'

class TodolistFinish extends Component{

  generatorList(){
    const props = {
      onChange:this.handleFinishList,
      onDelete:this.handleDeleteList
    }
    return(
      <div>
        {this.props.todolist.map((item)=>{
          if(item.finish){
            return <TodoListItem key={item.id} {...item} {...props} />
          }
        })}
      </div>
    )
  }

  handleFinishList= (id)=>{
    this.props.changeTodoList(id);
  }

  handleDeleteList = (id)=>{
    this.props.deleteTodoList(id);
  }

  render(){
    return(
      <div className="todolist-wrapper">
        <p>已完成列表</p>
        {this.generatorList()}
      </div>
    )
  }
}


const mapStateToProps = (state)=>{
  return{
    todolist : state.todolist
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    changeTodoList:(id)=>{
      dispatch(changeTodoList(id))
    },
    deleteTodoList:(id)=>{
      dispatch(deleteTodoList(id))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TodolistFinish);