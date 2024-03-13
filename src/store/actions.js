
import { ADDTASK,DELETETASK } from "./actionstype"
export function  addTodo(task){
    return{type:ADDTASK,payload:task}

}
export function deleteTodo(index){
    return{type:DELETETASK,payload:index}
}

export function getCountries(){
        return(dispatch)=>{
         fetch("https://restcountries.com/v2/all")
        .then(res=>res.json())
        .then(countries=>{dispatch({type:'UPDATECOUNTRIES',payload:countries})})
        }
    }