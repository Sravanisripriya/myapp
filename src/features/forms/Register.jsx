import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup'
  
function Register(){
     var formik=useFormik({
        initialValues:{
            name:'',
            email:'',
            number:'',
            password:''
        },
        onSubmit:(values)=>{console.log(values)},
        validationSchema:Yup.object({
            name:Yup.string().required('Please enter Name'),
            email:Yup.string().required('Please enter Email'),
            number:Yup.string().required('Please enter Number').max(11,'Too long' ),
            password:Yup.string().required('Please enter Password'),
        })
     })



    return(
      <form class="p-5 rounded shadow formMainR"  onSubmit={formik.handleSubmit}>
    <h1 className="text-center text-danger">REGISTER FORM</h1>
          <div className="w-75 m-auto">
      <input type="text" placeholder="Name" name="name" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control mt-5"/>
        <b>{formik.touched.name && formik.errors.name}</b>

        <input type="email" placeholder="Email" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control mt-5"/>
        <b>{formik.touched.email && formik.errors.email}</b>

        <input type="number" placeholder="Number" name="number" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control mt-5"/>
        <b>{formik.touched.number && formik.errors.number}</b>

        <input type="password" placeholder="Password" name="password" onChange={formik.handleChange} onBlur={formik.handleBlur} className="form-control mt-5" />
        <b>{formik.touched.password && formik.errors.password }</b>

        <button className="btn btn-primary form-control mt-4 mb-4" type="submit">Register</button>
    </div>
    </form>
    )

}
export default Register