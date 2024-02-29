import React, { useEffect } from "react";
import Todo from "./todo";


function Todolist(){  
  var [task,setTask]=React.useState([])
var inp=React.useRef("")
console.log(inp)

  function del(ind){
    var temp=[...task]
    temp.splice(ind,1)
    setTask([...temp])
  }

  function add(){
    console.log(inp.current.value)
    let newtd={
      title:inp.current.value,
      status:false
    }
    setTask([...task,newtd])
     inp.current.value=""
    console.log(inp)
  }
  useEffect(()=>{inp.current.focus()},[])
  
  function checkEnter(e){
    if(e.key==="Enter"){
      add()
    }}
  
  function undo(index){
   var temp=[...task]
   temp[index].status=false
   setTask([...temp])
  }
  function done(index){
    var temp=[...task]
    temp[index].status=true
    setTask([...temp])
  }
  
  return(  
    <div>
    <div className="header">
       <h1>MY TODOLIST</h1>
    <input type="text" placeholder="Title" ref={inp} onKeyUp={(e)=>{checkEnter(e)}} id="inp"/>
    <button onClick={()=>{add()}} id="btn">ADD</button>
    </div>
    {
      task.map((etask,i)=>{
        return <Todo t={etask} i={i} del={del} undo={undo} done={done}></Todo>
      })
    }

    </div>
  )}


    export default  React.memo(Todolist)

    
  