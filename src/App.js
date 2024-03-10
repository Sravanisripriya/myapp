
import './App.css';
import {Provider} from 'react-redux'
import store from './store/store';
import Counter from './components/Counter';
import Todolist from './components/Todolist';
import Countries from './components/Countries';
import React from 'react';

function App() {
  
  return (
    <Provider store={store}>
    <div className='style'>
      <h1>REACT REDUX</h1>
      <Counter></Counter>
      <Todolist></Todolist>
      <Countries></Countries>
      </div>
    </Provider>
     
   
  );
}

export default App;
