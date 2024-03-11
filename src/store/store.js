import {combineReducers,createStore} from 'redux';
import counterReducer from './reducers/counter';
import todoReducer from './reducers/todo';

var store=createStore( combineReducers({
    counter:counterReducer,
    todolist:todoReducer
}))
export default store


