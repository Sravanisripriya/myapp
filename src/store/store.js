import { createStore } from "redux";
import counterReducer from "./Reducers/counter.Reducer";
import todosReducer from "./Reducers/todos.Reducer";
import { combineReducers } from "redux";

const reducer=combineReducers({
    counter:counterReducer,
    todosList:todosReducer

})
const store=createStore(reducer)

export default store
