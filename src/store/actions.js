
import { ADD,DEL } from "./actionstype"
export function  Addtodo(task){
    //   return{type:'ADD',payload:task}
    return{type:ADD,payload:task}

}
export function Deltodo(index){
    // return{type:'DEL',payload:index}
    return{type:DEL,payload:index}
}

export function getCountries(){
return(dispatch)=>{
    fetch('https://restcountries.com/rest/v2/all')
    .then(res=>res.json())
    .then(countries=>{dispatch( {type:'UPDTAECOUNTRIES',payload:countries})})
}
}