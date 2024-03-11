import React from "react";
import { connect } from "react-redux";

function Todolist(props){
  console.log(props)
    return(
        <div>
            <h1>TODOLIST</h1>
             <input type='text' onKeyUp={(e)=>{props.dispatch({type:'UPDATENEWTODO',payload:e.target.value})}}/>
             <button onClick={()=>{props.dispatch({type:'ADDTODO'})}}>Addtodo</button>
            <ul>
                {
                props.todolist && props.todolist.todos.map((t,i)=>{
                    return <li>
                           {t}
            <button onClick={()=>{props.dispatch({type:'DELETETODO',index:i})}} >Del</button>
                          </li>   
              })}
            </ul>
           
        </div>
    )
}
export default  connect(function(store){return store}) (Todolist)