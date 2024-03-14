  const initialState={
       todos:['car','bus','auto']
  }

  function todoReducer(state=initialState,action){

    if(action.type==='ADDTASK'){
        return{...state,todos:[...state.todos,action.payload]}
    }
    if(action.type==='DELETETASK'){
        var temp=[...state.todos]
        temp.splice(action.payload,1)
        return{...state,todos:[...temp]}
    }
    return state;
  } 
  export default todoReducer