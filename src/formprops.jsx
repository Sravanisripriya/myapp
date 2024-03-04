import React from "react";
import { useFormik } from "formik";
import * as  Yup from 'yup'

function Formprop(){
    var formik=useFormik({
        initialValues:{
            Fname:'',
            Lname:'',
            Password:'',
            Email:'',
            Contact:''
        },
        onSubmit:(values)=>{console.log(values)},
        validationSchema:Yup.object({
            Fname:Yup.string().min(3,'too small').max(15,'too big').required('firstname is required'),
             Password:Yup.string().required('password is required'),
            Contact:Yup.string().max(10,'too big').required('number is required'),
        })
       
    })
    //  console.log(formik.touched) -shows error msg  in error property
return(
    <div  className='border border-2 border-danger p-5 m-2'>
        <h1> REGISTRATION FORM (getFieldProps)</h1>
        <form onSubmit={formik.handleSubmit}>
        <label>FirstName:</label>
        <input type="text" name="Fname" placeholder="firstname"{...formik.getFieldProps('Fname')}/><br/><br/>
        <div>{formik.touched.Fname && formik.errors.Fname }</div>

        <label>LastName:</label>
        <input type="text" name="Lname" placeholder="lastname"{...formik.getFieldProps('Lname')}/><br/><br/>

        <label>Password:</label>
        <input type="text" name="Password" placeholder="password" {...formik.getFieldProps('Password')}/><br/><br/>
        <div>{formik.touched.Password && formik.errors.Password}</div>

        <label>Email:</label>
        <input type="text" name="Eamil" placeholder="email" {...formik.getFieldProps('Email')}/><br/><br/>

        <label>Contact:</label>
        <input type="text" name="Contact" placeholder="contact" {...formik.getFieldProps('Contact')}/><br/><br/>
        <div>{formik.touched.Contact && formik.errors.Contact}</div>

        <button type="submit">REGISTER</button>
        </form>
    </div>
)}

export default Formprop
