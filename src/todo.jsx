import React from "react";
function Todo({t,del,i,undo,done}){
    return(
        <li className={t.status===true?"text-decoration-line-through":""}>
            {t.title}

    {t.status===true?
(<button onClick={()=>{undo(i)}}>Undo</button>):(<button onClick={()=>{done(i)}}>Done</button>)}

    <button onClick={()=>{del(i)}}>Del</button>
             
           

        </li>
    )}

export default React.memo( Todo)





























































