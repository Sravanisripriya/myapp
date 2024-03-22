
import './App.css';
import Home from './features/forms/Home.jsx';
import Nav from './features/forms/Nav.jsx';
import { Outlet } from 'react-router';


function App() {
  return (
    <div>
      <Nav></Nav>
    <Outlet> </Outlet>

   
      
    </div>
  );
}

export default App;