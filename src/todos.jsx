import React from "react";

function Todos(props){
    console.log("Todos::"+props.t)
    return(
        <div>
            <li>
                  {props.t}
                <button onClick={()=>{props.del(props.index)}}>Delete</button>
                <button>Done</button>
                <button>Undo</button>
            </li>
        </div>
    )
        
    
}
export default React.memo(Todos)