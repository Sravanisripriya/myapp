import React from 'react';
import './App.css';
import { Link,Outlet,} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>App component</h1>
    <Link to="counter">counter</Link> &nbsp; &nbsp;
    <Link to="todos">todos</Link>&nbsp; &nbsp;
    <Link to="countries">countries</Link>
     <Outlet></Outlet>
    </div>
  );
}

export default App;
