import React , {Component} from 'react';
import {addTodoList,resetTodoList} from '../../redux/action/todolistAction';
import {connect} from 'react-redux';
import {Button, Input ,Tag} from 'antd';
class Todolist extends Component {
  state = {
    todoText:''
  }

  generatorList(){
    return(
      <div>
        {this.props.todolist.map((item,index)=>{
          return <li key={index}>{item.text}</li>
        })}
      </div>
      
    )
  }

  handleTodoInput = (e)=>{
    e.preventDefault();
    this.setState({
      todoText: e.target.value
    })
  }

  handleAddToDoList = ()=>{
    this.props.addTodoList(this.state.todoText);
    this.setState({
      todoText:''
    })
  }

  render(){
    return (
      <div>
        <Input style={{ width: 200 , marginRight:30 }} value={this.state.todoText} onChange={this.handleTodoInput} />
        <Button style={{marginRight:5}} onClick={this.handleAddToDoList}>add list</Button>
        <Button onClick={this.props.resetTodoList}>reset list</Button>
        <div>

        </div>
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
    addTodoList:(text)=>{
      console.log(text);
      dispatch(addTodoList(text));
    },
    resetTodoList:()=>{
      dispatch(resetTodoList());
    }
  }
  
}

export default connect(mapStateToProps,mapDispatchToProps)(Todolist);