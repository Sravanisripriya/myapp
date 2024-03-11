import {combineReducers,createStore} from 'redux';
import counterReducer from './reducers/counter';

var store=createStore( combineReducers(
    {counter:counterReducer}
))
export default store


