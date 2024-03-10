import counterReducer from "./counter.reducer";
import todoReducer from "./todo.reducer";
import studentReducer from "./student.reducer";
import {combineReducers} from 'redux'
import countriesReducer from "./countries.reducer";

var reducer=combineReducers({
    counter:counterReducer,
    todo:todoReducer,
    student:studentReducer,
    countries:countriesReducer
})

export default reducer