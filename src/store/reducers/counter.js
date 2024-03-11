const initialState={
    count:0
}
function counterReducer(state=initialState,action){
    //  console.log(state,action)   show action type 
if(action.type==='INCREMENT'){
    return{...state,count:state.count+1}
}
if(action.type==='DECREMENT'){
    return{...state,count:state.count-1}
}
if(action.type==='RESET'){
    return{...state,count:initialState.count}
}
return state
}
export  default counterReducer