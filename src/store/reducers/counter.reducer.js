const initialState={
    count:0
}

function counterReducer(state=initialState,action){
    

   if(action.type==='INC'){
    // console.log('state',State)
    // console.log('action',action)
    return {...state,count:state.count+1}
   }
   if(action.type==='DEC'){
    return{...state,count:state.count-1}
   }
   if(action.type==='RES'){
    return {...state,count:initialState.count}
   }
     return state
}
export default counterReducer