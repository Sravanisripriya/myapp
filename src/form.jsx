import React from "react"
import { useFormik } from "formik"
import * as Yup from 'yup'


function Form(){
    var formik=useFormik({
   initialvalues:{
    Name:'',
    num:'',
    email:'',
    course:[],
    mode:'',
    date:'',
    int:'',
    remarks:'',
    calldate:''
   },

   onSubmit:(values)=>{console.log('onSubmit',values)},

   validationSchema:Yup.object({
    Name:Yup.string().min(2,'not valid').max(15,'valid').required('please enter name'),
    num:Yup.string().min(2,'not valid').max(10,'valid').required('please enter num'),
    email:Yup.string().min(2,'not valid').max(10,'valid').required('please enter email'),
    course:Yup.array().min(1,'please select one').required('atleast one Required')
   })
    })


    
    
    return (
       <div className="main">
            <div className="enq">
            <h1>ENQUIRY FORM</h1>&nbsp;&nbsp;
            <form  onSubmit={formik.handleSubmit}>
              
            <label className="text-primary">Name :</label>
            <input type="text" placeholder="Name" name='Name'  class="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} />&nbsp;
            <div>{formik.touched.Name && formik.errors.Name}</div>

            <input type="text" placeholder="Phone Number" class="form-control" {...formik.getFieldProps('num')} />&nbsp;
            <div>{formik.touched.num && formik.errors.num}</div>

            <input type="text" placeholder="Email" class="form-control" {...formik.getFieldProps('email')}/>&nbsp;
            <div>{formik.touched.email && formik.errors.email}</div>
          
            <h4>COURSE</h4>
            <div>{formik.touched.course && formik.errors.course}</div>
            <input type='checkbox'name='course' onChange={formik.handleChange} onBlur={formik.handleBlur}/>&nbsp;
            <label> Frontend with angular</label><br/>
           
            <input type='checkbox' name='course' onChange={formik.handleChange} onBlur={formik.handleBlur}/>&nbsp;
            <label>Frontend with react</label><br/>
            
            <input type='checkbox' name='course' onChange={formik.handleChange} onBlur={formik.handleBlur}/>&nbsp;
            <label>Full stack JAVA</label><br/>
           
            <input type='checkbox' name='course' onChange={formik.handleChange} onBlur={formik.handleBlur}/>&nbsp;
            <label>MEAN</label><br/>
          
            <input type='checkbox' name='course' onChange={formik.handleChange} onBlur={formik.handleBlur}/>&nbsp;
            <label>MERN</label><br/>
          
            <input type='checkbox' name='course' onChange={formik.handleChange} onBlur={formik.handleBlur}/>&nbsp;
            <label>Devops</label>

           <div id='radio'>
           <h4>MODE</h4>
            <input type='radio' name='mode' />&nbsp;
            <label>Offline</label><br/>

            <input type='radio' name='mode'/>&nbsp;
            <label>Online</label>
            </div> 
            </form>
            </div>
         
          <div className="feed">
            <h1>FEEDBACK</h1>&nbsp;&nbsp;
            <form onSubmit={formik.handleSubmit}>
            <input type='date' name='date'/>&nbsp;&nbsp;

            <select>
                <option selected disabled >Choose an option</option>
                <option value='int' name='opt1'>Interested</option>
                <option value='int' name='opt2'>Not Interested</option>
            </select><br/><br/>
            
            <textarea name="remarks">Remarks</textarea><br/><br/>
            <input type='date' name='calldate'/>
            <button id="btn" type="submit">Save</button>

            <button id="btnenq">All Enquiries</button>
            </form>
          
          
          </div>
    </div>
   
    )  }
  
export default Form