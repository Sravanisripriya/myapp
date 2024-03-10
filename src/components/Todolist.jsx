import React from "react";
import { connect } from "react-redux";
import { Addtodo,Deltodo } from "../store/actions";
 
function Todolist(Props){
    const [task,setTask]=React.useState('')
    function add(){
        // Props.dispatch({type:'ADD',payload:task})
        Props.dispatch(Addtodo(task))
    }
    function del(i){
        // Props.dispatch({type:'DEL',payload:i})
        Props.dispatch(Deltodo(i))
    }
   
    return(
        <div className="style">
        <h1>TODOLIST</h1>
        <input type='text' onChange={(e)=>{setTask(e.target.value)}}/>
        <button onClick={add}>Add</button>
       
        {
            Props.todo.todos.map((t,i)=>{
                return <li key={i}>{t} 
                 <button onClick={()=>{del(i)}}>Del</button>
                 </li>
            })
        }
       
        </div>
    )
}

export default connect(function (store){return store})(Todolist)