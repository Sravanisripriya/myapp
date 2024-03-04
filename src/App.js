
import './App.css';
// import { useFormik } from 'formik'
import { Formik } from 'formik'
//////////type-1//////////////////
// function App() {
//     var  userForm=useFormik({
//       initialValues:{"fn":"","ln":"","age":""},
//       onSubmit:(fv)=>{console.log(fv)}
      
//     })
//     console.log(userForm)

//     return (
//     <div className=''>  
//       <h1>Form Handling</h1>
//    <form onSubmit={userForm.handleSubmit}>
//     <input type="text"  name="fn" placeholder="Firstname" onChange={userForm.handleChange}/><br/>
//     <input type="text"  name="ln" placeholder="Lasttname" onChange={userForm.handleChange}/><br/>
//     <input type="text"  name="age" placeholder="age"       onChange={userForm.handleChange}/><br/>
//     <button type="submit">Save</button>
//    </form>
//     </div>
//   )}

////////////////type-2////////////
function App(){
  return(
    <diV>
    <h1>Formik</h1>
    <Formik 
       initialValues={{"fn":"","ln":"","age":""}}
        onSubmit={(fv)=>{console.log(fv)}}
     >
    {
      ({handleSubmit,handleChange})=>{
        return(
          <form onSubmit={handleSubmit}>
          <input type="text" name="fn" placeholder="Firstname" onChange={handleChange}/><br/>
          <input type="text" name="ln" placeholder="Lastname" onChange={handleChange}/><br/>
          <input type="text" name="age" placeholder="age" onChange={handleChange}/><br/>
          <button type="Submit">Save</button>
          </form>
        )
      }
    }
    </Formik>
    </diV>
  )}



export default App;
