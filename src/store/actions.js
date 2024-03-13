import { ADDTODO } from "./action.type"
export function addTodo(){
    return {type:'ADDTODO'}
    }
    export function updateNewTodo(newtodo){
        return {type:"UPDATENEWTODO",payload:newtodo}
    }
    export function deleteTodo(i){
        return {type:"DELETETODO",index:i}
    }