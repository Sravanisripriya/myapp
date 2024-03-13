import { createSlice } from "@reduxjs/toolkit";
const initialState={
    todolist:['hii','hello','bye']
}
export const todoSlice=createSlice({
    name:'todolist',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todolist.push(action.payload)
        },
        deleteTodo:(state,action)=>{
            state.todolist.splice(action.payload)
        }
    }
})
export  const {addTodo,deleteTodo}=todoSlice.actions
var todoReducer=todoSlice.reducer
export default todoReducer