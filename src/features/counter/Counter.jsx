import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { dec, inc } from "./counterSlice";





function Counter(){
    var {count} =useSelector(state=>state.c)
    var dispatch=useDispatch()
    console.log(count)
    return(
        <div>
        <h1>COUNTER:{count}</h1>
        <button onClick={()=>{dispatch(inc())}}>INCREMENT</button>
        <button onClick={()=>{dispatch(dec())}}>DECREMENT</button>
        </div>
    )
}
export default Counter