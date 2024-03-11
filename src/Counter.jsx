import React from "react";
import { connect } from "react-redux";

function Counter(props){
      console.log(props) 
 return(
    <div>
        <h1>Counter:{props.counter.count}</h1>
        <button onClick={()=>props.dispatch({type:'INCREMENT'})}>Increment</button>&nbsp;
        <button onClick={()=>props.dispatch({type:'DECREMENT'})}>Decrement</button>&nbsp;
        <button onClick={()=>props.dispatch({type:'RESET'})}>Reset</button>&nbsp;

    </div>
 )
}
export default connect(function(store){return store})(Counter)
// export default  connect(store=>store)(Counter)