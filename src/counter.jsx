import React from "react";


function Counter() {

    const[count, setCount]=React.useState(0)
    
    
    
    function inc(){
        setCount(count+1)
    }
function dec(){
        setCount(count-1)
    }
    function reset(){
        setCount(0)
    }

    return <div>

    <h1>Counter:{count}</h1>
    <button onClick={inc}>Inc</button>
    <button onClick={dec}>Dec</button>
    <button onClick={reset}>Reset</button>


    </div>
}

export default Counter;
