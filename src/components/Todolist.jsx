import React from "react";
import { connect } from "react-redux";
import { addTodo,deleteTodo } from "../store/actions";
 
function Todolist(Props){
    const [task,setTask]=React.useState('')
    function addTask(){
        // Props.dispatch({type:'ADD',payload:task})
        Props.dispatch(addTodo(task))
    } 
    function deleteTask(i){
        // Props.dispatch({type:'DEL',payload:i})
        Props.dispatch(deleteTodo(i))
    } 
   
    return(
        <div className="style">
        <h1>TODOLIST</h1>
        <input type='text' onChange={(e)=>{setTask(e.target.value)}}/>
        <button onClick={addTask}>Add</button>
       
        {
            Props.todo.todos.map((t,i)=>{
                return <li key={i}>{t} 
                 <button onClick={()=>{deleteTask(i)}}>Del</button>
                 </li>
            })
        }
       
        </div>
    )
}

export default connect(function (store){return store})(Todolist)