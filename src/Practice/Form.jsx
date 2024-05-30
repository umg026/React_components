import { useFormik } from 'formik'
import React from 'react'
import { practiceForm } from './schema';

const initialValues = {
  name: "",
  country: "",
  address: ""
}

function Form() {
  const { values, handleSubmit, handleChange, touched, handleBlur, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: practiceForm,
    onSubmit: (value, action) => {
      console.log(value);
      action.resetForm()
    }
  })


  return (
    <>
      <div className='flex justify-center items-center flex-col'>
        <form action="" method='POST' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name :</label>
            <input type="text" value={values.name} onChange={handleChange} onBlur={handleBlur} name='name' placeholder='name' className=' border border-black px-2 mx-5 mt-2' />
            {errors.name && touched.name ? <p className='text-red-500'>{errors.name}</p> : null}
          </div>
          <div>
            <label htmlFor="name">Type :</label>
            <select name="country" id="" value={values.country} onChange={handleChange} onBlur={handleBlur} className=' border border-black px-2 mx-5 mt-2'>
              <option value="">Select country</option>
              <option value="india">india</option>
              <option value="usa">USA</option>
              <option value="china">China</option>
              <option value="pakistan">PAK</option>
            </select>
            {errors.country && touched.country ? <p className='text-red-500'>{errors.country}</p> : null}

          </div>
          <div>
            <label htmlFor="adress">Address :</label>
            <textarea name="address" value={values.address} onChange={handleChange} onBlur={handleBlur} id="adress" cols="30" rows="0" placeholder='enter Adreess' className=' border border-black px-2 mx-5 mt-2'></textarea>
            {errors.address && touched.address ? <p className='text-red-500'>{errors.address}</p> : null}
        
          </div>

          <div>
            <button type="submit" className='items-center text-center mx-5 mt-10 '>Submit</button>
          </div>
        </form>

      </div>
    </>
  )
}

export default Form