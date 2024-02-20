import React, { useRef } from "react";

function Todolist(){
    let empty=useRef()
    let [strike,setStrike]=React.useState(false)
    var [task,setTask]=React.useState([])
    var[newtask,setNewtask]=React.useState("")
      function add(){
         setTask([...task,newtask])
         empty.current.value=""
      }
      function del(index){
          var temp=[...task]
        temp.splice(index,1)
        setTask([...temp])
      }
      const done=(index)=>{
       
      }
    return(
        <div>
            <h1>TODOLIST</h1>
            <input type="text"  ref={empty} onKeyUp={(e)=>{setNewtask(e.target.value)}}/>
            <button onClick={()=>{add()}} >Add</button>
            <ul>
            {task.map((todos,i)=>{
                return(
                    <li style={strike?{textDecoration:"line-through"}:{}}>{todos}
                    <button onClick={()=>{del(i)}}>Delete</button>
                    <button onClick={()=>{done(i)}}>Done</button>
                    </li>
                )
            })}
            </ul>

        </div>
    )}

    export default Todolist
    


    