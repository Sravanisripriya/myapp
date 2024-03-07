import React from "react";

function Todos(){
    let [newTodo,setTodo]=React.useState(['hi','hello'])
    let [task,setTask]=React.useState('')

    function newtask(e){
        setTask(e.target.value)
    }

    function addTodo(){
            setTodo((arr)=>[...arr,task])
    }
    return <div>
        <h1>Todos List</h1>
        <input type="text" name="" id="" onChange={(e)=>newtask(e)}/>
        <button onClick={addTodo}>add</button>
        <div>
            {
                newTodo.map((todo)=>{
                    return <li>{todo}</li>
                })
            }
        </div>
    </div>
}

export default Todos