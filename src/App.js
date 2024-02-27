import React from 'react';
import './App.css';
import { Outlet,Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <h1>karimulla</h1>
    <Link to="/counter">counter</Link> &nbsp; &nbsp;
    <Link to="/todos">todos</Link>
    <Link to="/countries">countries</Link>
     <Outlet></Outlet>
    </div>
  );
}

export default App;
