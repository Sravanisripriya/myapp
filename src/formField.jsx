import React from "react";
import {Field, Formik } from "formik";
import * as  Yup from 'yup'

function FormField(){
return(
    <div  className='border border-2 border-danger p-5 m-2'>
        <h1> REGISTRATION FORM(field) </h1>
        <Formik
        initialValues={{
            Fname:'',
            Lname:'',
            Password:'',
            Email:'',
            Contact:''
        }}
        validationSchema={Yup.object({
            Fname:Yup.string().min(3,'too small').max(15,'too big').required('firstname is required'),
             Password:Yup.string().required('password is required'),
            Contact:Yup.string().max(10,'too big').required('number is required'),
        })}
        onSubmit={(values)=>{console.log('onSubmit',values)}}
         >
        {   
            (formik)=>{
                return(
                 
                    <form onSubmit={formik.handleSubmit}>
                    <label>FirstName:</label>
                    <Field name='Fname'></Field><br/><br/>
                    <div>{formik.touched.Fname && formik.errors.Fname }</div>
            
                    <label>LastName:</label>
                    <Field name='Lname'></Field><br/><br/>
                
            
                    <label>Password:</label>
                    <Field name='Password'></Field><br/><br/>
                    <div>{formik.touched.Password && formik.errors.Password}</div>
                  
                    <label>Email:</label>
                    <Field name='Email'></Field><br/><br/>
            
                    <label>Contact:</label>
                    <Field name='Contact'></Field><br/><br/>
                    <div>{formik.touched.Contact && formik.errors.Contact}</div>
            
                    <button type="submit">REGISTER</button>
                    </form>
                )
            }
        }
           </Formik>
    </div>
)}

export default FormField
