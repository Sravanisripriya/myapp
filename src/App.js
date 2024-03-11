
import './App.css';
import{ Provider } from 'react-redux'
import store from './store/store';
import Counter from './Counter';
import Todolist from './Todolist';


function App() {
  return (
    <div>
    <Provider store={store}>
       <h1>React redux Scratch</h1>
       <Counter></Counter>
       <Todolist></Todolist>
    </Provider>
      
    </div>
  );
}

export default App;
