import React from "react";

function Todolist(){
    var [task,setTask]=React.useState([])
    var[newtask,setNewtask]=React.useState("")
      function add(){
         setTask([...task,newtask])
      }
      function del(index){
          var temp=[...task]
        temp.splice(index,1)
        setTask([...temp])
      }
    return(
        <div>
            <h1>TODOLIST</h1>
            <input type="text" onKeyUp={(e)=>{setNewtask(e.target.value)}}/>
            <button onClick={()=>{add()}} >Add</button>
            <ul>
            {task.map((todos,i)=>{
                return(
                    <li>{todos}
                    <button onClick={()=>{del(i)}}>Delete</button>
                    </li>
                )
            })}
            </ul>

        </div>
    )}

    export default Todolist
    