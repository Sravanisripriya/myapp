import React from "react";


function Counter() {

    const[count, setCount]=React.useState(0)
    
    
    
    function inc(){
        setCount(count+1)
    }
function dec(){
        setCount(count-1)
    }

    return <div>

    <h1>Counter:{count}</h1>
    <button onClick={inc}>Inc</button>
    <button onClick={dec}>Dec</button>

    </div>
}

export default Counter;