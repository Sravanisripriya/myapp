import React, { useRef } from "react";
import Todos from "./todos.jsx"

function Todolist(){  
  var [task,setTask]=React.useState(["arya","anu","renu","imran","munnu"]) 
  var[newtask,setNewtask]=React.useState("")          
    let empty=useRef()
    
    
      function add(){
         setTask([...task,newtask])
         empty.current.value=""
       
      }
      var del=React.useCallback((index)=>{
          var temp=[...task];
        temp.splice(index,1);
        setTask([...temp])
      },[])
      
    return(
        <div>
            <h1>TODOLIST</h1>
            <input type="text"  ref={empty} onKeyUp={(e)=>{setNewtask(e.target.value)}}/>
            <button onClick={()=>{add()}} >Add</button>
            <ul>
            {task.map((todos,i)=>{
                return(
                  <div>
                       <Todos t={todos} index={i} del={del}></Todos>
                  </div>
                    
                )
            })}
            </ul>

        </div>
    )}

    export default  React.memo(Todolist)

    
    


    