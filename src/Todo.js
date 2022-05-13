import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {getTodos,add,deleteTodo,update} from './store/action'

function Todo(props){
    console.log("#####",props,props.todo)
    const  todos  = props.todo;
    const [newTodo, setNewTodo] = React.useState('');
    const [newStatus, setNewStatus] = React.useState('not done');
    const [eid,setEid]=React.useState();
    
    var editTodo=(todo)=>{
        setNewTodo(todo.task);
        setNewStatus(todo.status);
        setEid(todo.id);
    }
    useEffect(()=>{
        props.dispatch(getTodos());
    },[props])
    return(
        <div>
            <h4>TodoList</h4>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => {
          setNewTodo(e.target.value);
        }}
      />
      <input type='radio' value='done' name='status' checked={newStatus=='done'}onChange={(e) => {
          setNewStatus(e.target.value);
        }}/> Done
      <input type='radio' value='not done' name='status' checked={newStatus=='not done'} onChange={(e) => {
          setNewStatus(e.target.value);
        }}/> Not Done
      <button
        onClick={() => {
          props.dispatch(add(newTodo,newStatus));
          setNewTodo('');
        }}
      >
        Add Todo
      </button>
      <button onClick={()=>props.dispatch(update(newTodo,newStatus,eid))}>Update</button>
        {todos.map((todo, i) => {
        return (
          <li key={i}>
            {todo.task}{' '}{todo.status}
            <button
              onClick={() => {
                props.dispatch(deleteTodo(todo.id));
              }}
            >
              del
            </button>
            <button
              onClick={() => {
                editTodo(todo);
              }}
            >
              edit
            </button>
          </li>
        );
      })}
    </div>
    )  
}
export default connect((store) => store)(Todo)