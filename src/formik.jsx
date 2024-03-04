import React from "react";
import { useFormik } from "formik";
import * as  Yup from 'yup'

// function checkForm(values){                  
// // console.log("checkForm::",values)           
// var error={};                                    
// if(!values.Fname){
//    error.Fname='Requried'
// }                                          
// if(!values.Password){                          VALIDATION
//     error.Password='Required'                    WITHOUT
// }                                                 YUP
// if(!values.Email){
//     error.Email='Required'
// }
// if(!values.Contact){
//     error.Contact='Required'
// }
// return error
// }


function Form(){
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
        // validate:checkForm
       
    })
    //  console.log(formik.touched) -shows error msg  in error property
return(
    <div  className='border border-2 border-danger p-5 m-2'>
        <h1> REGISTRATION FORM</h1>
        <form onSubmit={formik.handleSubmit}>
        <label>FirstName:</label>
        <input type="text" name="Fname" placeholder="firstname" onChange={formik.handleChange} onBlur={formik.handleBlur}/><br/><br/>
        <div>{formik.touched.Fname && formik.errors.Fname }</div>

        <label>LastName:</label>
        <input type="text" name="Lname" placeholder="lastname"onChange={formik.handleChange}/><br/><br/>

        <label>Password:</label>
        <input type="text" name="Password" placeholder="password" onChange={formik.handleChange} onBlur={formik.handleBlur}/><br/><br/>
        <div>{formik.touched.Password && formik.errors.Password}</div>

        <label>Email:</label>
        <input type="text" name="Eamil" placeholder="email" onChange={formik.handleChange} /><br/><br/>

        <label>Contact:</label>
        <input type="text" name="Contact" placeholder="contact" onChange={formik.handleChange} onBlur={formik.handleBlur}/><br/><br/>
        <div>{formik.touched.Contact && formik.errors.Contact}</div>

        <button type="submit">REGISTER</button>
        </form>
    </div>
)}

export default Form
