import React from "react";
import axios from "axios"
import {Link} from 'react-router-dom'

function Countries(){
    let[countries,setCountries]=React.useState([])
    React.useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all").then((res)=>{
            setCountries(res.data)
        })
    },[])
return(
<ul>
    {countries.length && countries.map(()=>{
        return <li>
            <Link to="abc">{countries.name.common}</Link>
        </li>
    })}
</ul>
)}

export default Countries