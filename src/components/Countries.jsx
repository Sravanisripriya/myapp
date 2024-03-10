 import React from "react";
 import { connect } from "react-redux";
 import { getCountries } from "../store/actions";

 function Countries(props){
    console.log("props in countries::",props)
    React.useEffect(()=>{
        props.dispatch(getCountries());
      },[])
    return(
        <div className="style">
            <h1>Countries</h1>
         {
               props.countries.countries.map((country)=>{
                 return(<li>{country.name}</li>)
               })
         }
        </div>
    )
 }
 export default connect(store=>store)(Countries)