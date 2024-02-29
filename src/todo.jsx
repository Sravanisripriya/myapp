import React from "react";
function Todo({t,del,i,undo,done}){
    return(
        <div className="list d-flex justify-content-between w-50 m-auto align-items-center">
        <li className={t.status===true?"text-decoration-line-through":""}>
        {t.title}
        </li>
        <div>
    {t.status===true?
(<button onClick={()=>{undo(i)}} className="btn btn-primary m-2">UNDO</button>):
(<button onClick={()=>{done(i)}} className="btn btn-success m-2">DONE</button>)}
    <button onClick={()=>{del(i)}}  className="btn btn-danger m-2">DELETE</button>
    </div>   
        </div>
    )}

export default React.memo( Todo)





























































