import React from "react";
import { Link } from "react-router-dom";
function Nav(){
    return(
        <div className="d-flex justify-content-between bg-secondary text-white p-3 align-items-center">
          <div className="w-75"><h2>PARLOUR</h2></div>

        <div className="d-flex justify-content-evenly w-25 Nlink">
         <Link to="/login" style={{textDecoration:"none"}}><b>LOGIN</b></Link>
         <Link to="/register" style={{textDecoration:"none"}}><b>REGISTER</b></Link>
        </div>
        </div>
    )

}
export default Nav