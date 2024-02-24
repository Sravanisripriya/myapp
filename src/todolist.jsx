import React  from "react";
import Todo from "./todo";


function Todolist(){  
  var [task,setTask]=React.useState(["arya","anu","renu","imran","munnu"])
  var [newtask,setNewtask]=React.useState("")

  function del(ind){
    var temp=[...task]
    temp.splice(ind,1)
    setTask([...temp])
  }
  
  
  return(
    <div>
    <input type="text" onChange={(e)=>{setNewtask(e.target.value)}}/>
    <button onClick={()=>{setTask([...task,newtask])}}>Add</button>

    {
      task.map((t,i)=>{
        return <Todo t={t} i={i} del={del} ></Todo>
         
        
      })
    }
    </div>
  )}


    export default  React.memo(Todolist)

    
    