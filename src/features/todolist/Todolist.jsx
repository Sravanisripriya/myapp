import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice";
function Todolist(){
    // var x= useSelector(state=>state.t)
    // console.log(x)    it shows todolist obj
    var {todolist}= useSelector(state=>state.t)
    console.log(todolist)
    var [newtask,setNewtask]=useState('')
    var dispatch=useDispatch()
    return(
        <div>
            <h1>TODOLIST</h1>
            <input type="text" onChange={(e)=>{setNewtask(e.target.value)}}/>
            <button onClick={()=>{dispatch(addTodo(newtask))}}>ADDTASK</button>
            {
              todolist?.map((t,i)=>{
                return<li>{t}
                <button onClick={()=>{dispatch(deleteTodo(i))}}>DELETETASK</button></li>
              })
            }
        </div>
    )}

export default Todolist