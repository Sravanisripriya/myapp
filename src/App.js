
import './App.css';
import Form from './formik';
import Formyup from './formyup';
import Formprop from './formprops';
import Formcomp from './formikComp';
import FormField from './formField';

function App() {
  return (
    <div>
      <h1> TYPES OF VALIDATION</h1>
      <Form></Form>
      <hr/>
      <Formyup></Formyup>
      <hr></hr>
      <Formprop></Formprop>
      <hr/>
      <Formcomp></Formcomp>
      <hr/>
      <FormField></FormField>
   
    </div>
  );
}

export default App;
