import React from "react";
import { Formik } from "formik";

function Form(){
    var formik=use.formik
 return(
    <div>
        <form onSubmit={formik}>
            <label>Register no:</label>
            <input typer="text" onChange={handChanger}/>

            <label>Name</label>
            <input typer="text"/>

            <label>Department</label>
            <input typer="text"/>

            <label>Address</label>
            <input typer="text"/>

            <label>Mobile no:</label>
            <input typer="text"/>

            <button type='submit'></button>
        </form>
    </div>
 )
}
export default Form