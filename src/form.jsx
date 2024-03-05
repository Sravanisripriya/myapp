import React from "react"
import { useFormik } from "formik"


function Form(){
    var formik=useFormik
    return (
       <div className="main">
            <div className="enq">
            <h1>ENQUIRY FORM</h1>&nbsp;&nbsp;
            <form>
            <input type="text" placeholder="Name" name='name'  class="form-control" />&nbsp;
            <input type="text" placeholder="Phone Number" name='num'  class="form-control" />&nbsp;
            <input type="text" placeholder="Email" name='email'  class="form-control" />&nbsp;-
          
            <h4>COURSE</h4>
            <input type='checkbox' name='angular'/>&nbsp;
            <label> Frontend with angular</label><br/>
           
            <input type='checkbox' name='react'/>&nbsp;
            <label>Frontend with react</label><br/>
            
            <input type='checkbox' name='java'/>&nbsp;
            <label>Full stack JAVA</label><br/>
           
            <input type='checkbox' name='mean'/>&nbsp;
            <label>MEAN</label><br/>
          
            <input type='checkbox' name='mern'/>&nbsp;
            <label>MERN</label><br/>
          
            <input type='checkbox' name='devops'/>&nbsp;
            <label>Devops</label>
           <div id='radio'>
           <h4>MODE</h4>
            <input type='radio' name='Off'/>&nbsp;
            <label>Offline</label><br/>

            <input type='radio' name='On'/>&nbsp;
            <label>Online</label>
            </div> 
            </form>
            </div>
         
          <div className="feed">
            <h1>FEEDBACK</h1>&nbsp;&nbsp;
            <input type='date' name='date'/>&nbsp;&nbsp;

            {/* <label>interest</label> */}
            <select>
                <option value='opt' name='choose'>Choose an option</option>
                <option value='int' name='opt1'>Interested</option>
                <option value='notint' name='opt2'>Not Interested</option>
            </select><br/><br/>
            
            <textarea>Remarks</textarea><br/><br/>
            <input type='date' name='date'/>
            <button id="btn">Save</button>

            <button id="btnenq">All Enquiries</button>
            
          </div>
    </div>
        
    )}
export default Form