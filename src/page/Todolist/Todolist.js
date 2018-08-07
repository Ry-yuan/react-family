import React , {Component} from 'react';
import {addTodoList,resetTodoList} from '../../redux/action/todolistAction';
import {connect} from 'react-redux';

class Todolist extends Component {

  generatorList(){
    return(
      <div>
        {this.props.todolist.map((item,index)=>{
          
          return <li key={index}>{item.text}</li>
        })}
      </div>
      
    )
  }

  render(){
    return (
      <div>
        {this.generatorList()}
        <button onClick={this.props.addTodoList}>add list</button>
        <button onClick={this.props.resetTodoList}>reset list</button>
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
    addTodoList:()=>{
      dispatch(addTodoList());
    },
    resetTodoList:()=>{
      dispatch(resetTodoList());
    }
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(Todolist);