import React from "react";
import getStore from './store/selectors'
import {handleIncrement,handleReset,handleDecrement} from './store/actions'
import { connect } from "react-redux";
function Counter(props){
  console.log(props)
    return <div>
        <h1>Counter:{props.count}</h1>
        <button onClick={()=>props.incrementCount()}>inc</button>
        <button onClick={()=>props.resetCount()}>res</button>
        <button onClick={()=>props.decrementCount()}>dec</button>
    </div>
}


const mapStateToProps=(store)=>getStore(store)
const mapDispatchToProps=(dispatch)=>(
  {
    incrementCount:()=>dispatch(handleIncrement()),
    resetCount:()=>dispatch(handleReset()),
    decrementCount:()=>dispatch(handleDecrement())
  }
  )

export default connect(mapStateToProps,mapDispatchToProps)(Counter)