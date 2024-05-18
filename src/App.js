// import FormValidation from './FormValidation/FormValidation';
import UseFormik from "./Formik_Yup_validation/UseFormik";
import ImageUpload from "./ImageUpload/ImageUpload";
import TextEditor from "./RichTextEditor/TextEditor";
import Search from "./Searching_func/Search";

// import Main from './useTransition/Main';
function App() {
  return (
    <>
      {/* <Search/> // searhcing functionalities */}
      <UseFormik/>  // useFormik Hook
      {/* <TextEditor /> // Text Editor  */}
      {/* <ImageUpload /> // upload image */}

      {/* <FormValidation /> Form validation  */}
      {/* <Main/> // useTransition hook */}
    </>
  );
}

export default App;
