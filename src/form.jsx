import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup'

function Form(){
    var formik=useFormik({
        initialValues:{
         num:'',
         name:'',
         dept:'',
         add:'',
         mnum:''
        },
     onSubmit:(values)=>{console.log(values)},

     validationSchema:Yup.object({
        num:Yup.string().min(4,'not valid').max(10,'valid').required('Number is required')
     })
    })
 return(
    <div>
        <form onSubmit={formik.handleSubmit}>
            <h1>REGISTRATION FORM</h1>
            <label>Register no:</label>
            <input typer="text" name='num' onChange={formik.handleChange}/><br/><br/>
            <div>{formik.touched.num && formik.errors.num}</div>

            <label>Student Name:</label>
            <input typer="text" name='name' onChange={formik.handleChange}/><br/><br/>

            <label>Department:</label>
            <input typer="text" name='dept' onChange={formik.handleChange}/><br/><br/>

            <label>Address:</label>
            <input typer="text" type='add' onChange={formik.handleChange}/><br/><br/>

            <label>Mobile no:</label>
            <input typer="text" type='mnum' onChange={formik.handleChange}/><br/><br/>

            <button type='submit'>Register</button>
        </form>
    </div>
 )
}
export default Form