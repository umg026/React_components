// import FormValidation from './FormValidation/FormValidation';
import DragDrop from "./Drag&Drop/Drag_and_Drop_file";
import UseFormik from "./Formik_Yup_validation/UseFormik";
import ImageUpload from "./ImageUpload/ImageUpload";
import Form from "./Practice/Form";
import Search from "./Searching_func/Search";
import Editor from "./editor+markdowon/Editor";
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
      {/* <DragDrop/> */}
      <Editor />

      {/* <Home/> UseContext Data Pass */}
      {/* <Markdown/> convert markdown in text */}
      {/* <Search/> // searhcing functionalities */}
      {/* <UseFormik/>  // useFormik Hook  */}
   
      {/* <ImageUpload /> // upload image */}

      {/* <FormValidation /> Form validation  */}
      {/* <Main/> // useTransition hook */}
    </>
  );
}

export default App;
