import React from "react";
import { Formik, useFormik } from "formik";
import * as Yup from 'yup'

function Login(){
    var formik=useFormik({
        initialValues:{
            username:'' ,
            password:'' 
        },
        onSubmit:(values)=>{console.log(values)},
        validationSchema:Yup.object({
            username:Yup.string().required('Please enter Username'),
            password:Yup.string().required('Please enter Password'),
        })
    })
 

    return(
        <div className="login-bg">
        <form class="p-5 rounded shadow formMainL" onSubmit={formik.handleSubmit} >
            <h1 className="text-center text-danger">LOGIN FORM</h1>
        <div className="w-75 m-auto">
        <input type="text" placeholder="Username" name="username" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control mt-5"/>
        <b>{formik.touched.username && formik.errors.username }</b>
        <input type="password" placeholder="Password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control mt-5" />
        <b>{formik.touched.password && formik.errors.password }</b>
        <button className="btn btn-primary form-control mt-4 mb-4" type="submit">Login</button>
        </div>
        </form>
        </div>
    )
}
export default Login