import React from "react";
import { connect } from "react-redux";

// function Todolist(props){
//  console.log(props)
//     return(
//         <div>
//             <h1>TODOLIST</h1>
//              <input type='text' onKeyUp={(e)=>{props.dispatch({type:'UPDATENEWTODO',payload:e.target.value})}}/>
//              <button onClick={()=>{props.dispatch({type:'ADDTODO'})}}>Addtodo</button>
//             <ul>
//                 {
//                 props.todolist && props.todolist.todos.map((t,i)=>{
//                     return <li>
//                            {t}
//             <button onClick={()=>{props.dispatch({type:'DELETETODO',index:i})}} >Del</button>
//                           </li>   
//               })}
//             </ul>
           
//         </div>
//     )
// }
//  export default  connect(function(store){return store}) (Todolist)

                //   REDUX  BEST PRACTICE 

      function Todolist(props){
         console.log(props)
    return(
        <div>
            <h1>TODOLIST</h1>
             <input type='text' onKeyUp={props.handleNewtodo}/>
             <button onClick={props.addTodo}>Addtodo</button>
            <ul>
                {
                props.todos && props.todos.map((t,i)=>{
                    return <li>
                           {t}
            <button onClick={()=>{props.deleteTodo(i)}}>Del</button>
                          </li>   
              })}
            </ul>
           
        </div>
    )
}
// rerender avvakundha
function mapStateToProps(state){return state.todolist}
function mapDispatchToProps(dispatch){return{
    handleNewtodo:(e)=>{dispatch({type:'UPDATENEWTODO',payload:e.target.value})},
    addTodo:()=>{dispatch(addTodo())},
    deleteTodo:(ind)=>{dispatch({type:'DELETETODO',index:ind})}         }}

export default connect( mapStateToProps, mapDispatchToProps)(Todolist)