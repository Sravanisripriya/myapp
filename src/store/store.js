import reducer from "./reducers/reducer";
import {applyMiddleware,createStore} from 'redux';
import { thunk } from "redux-thunk";

var store= new createStore(reducer,applyMiddleware((thunk)))

export default store;