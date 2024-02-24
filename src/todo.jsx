import React from "react";
function Todo({t,del,i}){
    return(
        <li>
            {t}
            <button onClick={()=>{del(i)}}>Del</button>
        </li>
    )
}
export default Todo