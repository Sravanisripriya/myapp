import React from "react";
import {connect} from 'react-redux'


function Counter(props){
    console.log(props)

    function inc(){
        props.dispatch({type:'INC'})
    }
    function dec(){
        props.dispatch({type:'DEC'})
    }
    function res(){
        props.dispatch({type:'RES'})
    }
    return(
        <div className="style">
            <h1>COUNTER:{props.counter.count}</h1>
            <button onClick={inc}>Increment</button>&nbsp;&nbsp;
            <button onClick={dec}>Decrement</button>&nbsp;&nbsp;
            <button onClick={res}>Reset</button>
        </div>
    )
    
}
export default connect(function(store){return store}) (Counter)