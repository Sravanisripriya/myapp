
import './App.css';
import{ Provider } from 'react-redux'
import store from './store/store';
import Counter from './Counter';


function App() {
  return (
    <div>
    <Provider store={store}>
       <h1>React redux Scratch</h1>
       <Counter></Counter>
    </Provider>
      
    </div>
  );
}

export default App;
