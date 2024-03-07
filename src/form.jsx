import React from "react"
import { useFormik } from "formik"
import * as Yup from 'yup'


function Form(){
    let formik=useFormik({
   initialValues:{
    name:'',
    num:'',
    email:'',
    courses:[],
    mode:'',
    date:'',
    options:'',
    remarks:'',
    ncd:''
   },
   validationSchema:Yup.object({
    name:Yup.string().min(2,'not valid').max(15,'valid').required('please enter name'),
    num:Yup.string().min(2,'not valid').max(10,'valid').required('please enter number'),
    email:Yup.string().required('please enter email'),
    courses:Yup.array().min(1,'please select one'),
    mode:Yup.string().required(),
    data:Yup.string().required(),
    remarks:Yup.string().required(),
    options:Yup.string().required(),
    ncd:Yup.string().required(),
   }),
   onSubmit:(values)=>{console.log(values)}  
    })

    return (
  <div className="main">
  <form  onSubmit={formik.handleSubmit}> 
      <div className=" d-flex justify-content-between p-5" >
      <div className="leftside">
              <h1 className="text-center p-4 text-primary">ENQUIRY FORM</h1>
               <div className="d-flex">
                <div className="form-floating mb-3 w-50">
                   <input type="text" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} name='name'  placeholder="Name"/>
                   <label className="text-primary">Name :</label>
                     {formik.touched.name && <b>{formik.errors.name}</b>}   
                </div>&nbsp;
                <div className="form-floating w-50">
                   <input type="text" class="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} name='num' placeholder="Number" />
                   <label className="text-primary">Number :</label>
                    {formik.touched.num && <b>{formik.errors.num}</b>}
                </div>
                </div>
                <div className="form-floating w-50">
                  <input type="text"  class="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} name='email' placeholder="Email"/>
                  <label className="text-primary">Email :</label>
                     {formik.touched.email && <b>{formik.errors.email}</b> }&nbsp;
                </div>
            <div className="d-flex justify-content-between w-75 ">
            <div>
            <strong className="text-primary">COURSES</strong><br/>
            <input type='checkbox' value='course1'  onChange={formik.handleChange} onBlur={formik.handleBlur} name='courses'/>&nbsp;
            <span className="mt-2">Frontend with React</span><br/>
            <input type='checkbox' value='course1'onChange={formik.handleChange} onBlur={formik.handleBlur} name='courses'/>&nbsp;
            <span className="mt-2">Frontend with Angular</span><br/ >
            <input type='checkbox' value='course1'      onChange={formik.handleChange} onBlur={formik.handleBlur} name='courses'/>&nbsp;
            <span className="mt-2">Full stack JAVA</span><br/>
            <input type='checkbox' value='course1' onChange={formik.handleChange} onBlur={formik.handleBlur} name='courses'/>&nbsp;
            <span className="mt-2">MEAN</span><br/>
            <input type='checkbox' value='course1' onChange={formik.handleChange} onBlur={formik.handleBlur} name='courses'/>&nbsp;
            <span className="mt-2">MERN</span><br/>
            <input type='checkbox' value='course1' onChange={formik.handleChange} onBlur={formik.handleBlur}  name='courses'/>&nbsp;
            <span className="mt-2">Devops</span><br/>
               <div>
                {formik.touched.courses && <b>{formik.errors.courses}</b>}
               </div>
             </div>
             </div>

           <div>
           <strong className="text-primary">MODE</strong><br />
            <input type='radio' name='mode' onChange={formik.handleChange} onBlur={formik.handleBlur} />&nbsp;
            <span>Offline</span><br />
            <input type='radio' name='mode' onChange={formik.handleChange} onBlur={formik.handleBlur} />&nbsp;
            <span>Online</span><br />
                <div>
                  {formik.touched.mode && <b>{formik.errors.mode}</b>}
                </div>
           </div>
          </div>
   
            
  <div className="rightside">
      <h1 className="text-center p-4 text-primary">FEED BACK</h1>

        <div className="d-flex">
          <div className="form-floating w-50">
            <input type="date" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} name="date" placeholder="date"/>
            <label className="text-primary">Date :</label>
            {formik.touched.date && <b>{formik.errors.date}</b>}
          </div>&nbsp;
                            
          <div className="form-floating w-50 mb-3">
            <select className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} name="int" placeholder='options'>
            <option name='options' onChange={formik.handleChange} onBlur={formik.handleBlur}>Choose a option</option>  
            <option name='options' onChange={formik.handleChange} onBlur={formik.handleBlur}>Interested</option>  
            <option name='options' onChange={formik.handleChange} onBlur={formik.handleBlur}>Not Interested</option>  
            </select>
            <label className="text-primary">Interest</label>
            {formik.touched.options && <b>{formik.errors.options}</b>}
           </div>
        </div>

          <div className="form-floating mb-3">
             <input type="text" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} name="remarks" placeholder="remarks"/>
             <label className="text-primary">Remarks :</label>
            {formik.touched.remarks && <b>{formik.errors.remarks}</b>}
          </div>
          <div className="form-floating">
          <input type="date" className="form-control" onChange={formik.handleChange} onBlur={formik.handleBlur} name="ncd" placeholder="nxt call date"/>
          <label className="text-primary">Next Call Date :</label>
          {formik.touched.ncd && <b>{formik.errors.ncd}</b>}
          </div>
          </div>
  </div>            
          <div className="btn1">
            <button className="btn btn-primary w-25 p-3">Save</button>
          </div>
</form>   
</div>
    )}  
  
export default Form