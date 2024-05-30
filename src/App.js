// import FormValidation from './FormValidation/FormValidation';
import UseFormik from "./Formik_Yup_validation/UseFormik";
import ImageUpload from "./ImageUpload/ImageUpload";
import Form from "./Practice/Form";
import TextEditor from "./RichTextEditor/TextEditor";
import Search from "./Searching_func/Search";
import Markdown from "./markdown/Markdown";
import Home from "./useContext/Home";

// import Main from './useTransition/Main';
function App() {
  return (
    <>
      {
        // practice form 
        // <Form/>
      }
      <Home/>
      {/* <Markdown/> convert markdown in text */}
      {/* <Search/> // searhcing functionalities */}
      {/* <UseFormik/>  // useFormik Hook */}
      {/* <TextEditor /> // Text Editor  */}
      {/* <ImageUpload /> // upload image */}

      {/* <FormValidation /> Form validation  */}
      {/* <Main/> // useTransition hook */}
    </>
  );
}

export default App;
