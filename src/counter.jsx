import React from 'react';
import './App.css';

function Counter() {
  let[count,setCount]=React.useState(0)

  const inc=()=>{
    setCount(count+1)
  }
    const dec=()=>{
      setCount(count-1)
    }
  
  return (
    <div className="App">
      <h1>Counter</h1>
    <h3>{count}</h3>
    <button onClick={inc}>INC</button>
    <button onClick={dec}>DEC</button>
    </div>
  );
}

export default Counter;
