import { useFormik } from 'formik'
import React, { useState } from 'react'
import { validation } from './schema'


const initialValues = {
    username: "",
    email: "",
    password: "",
    confrim_password: "",
    countery: ""
}
// array
const country = [{ "id": 1, "name": "USA" }, { "id": 2, "name": "India" }, { "id": 3, "name": "Nepal" }, { "id": 5, "name": "Canada" }]

function Form() {

    const [selctCountry, setSelctCountry] = useState("")
  

   const handleCountryChange =(event)=>{
    const selectedId = event.target.value;
    setSelctCountry(selectedId);
    handleChange(event);
   }

    const { values, handleSubmit, errors, handleBlur, handleChange, touched } = useFormik({

        initialValues,
        validationSchema: validation,
        onSubmit: (value, action) => {
            console.log("totalvalue : ", {
                ...value,
                selctCountry
            })
            // console.log(selctCountry)
            action.resetForm()
        }

    })
    // console.log(errors)



    return (
        <>
            <div className="flex h-screen">
               
                {/* Right Pane */}
                <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center">
                    <div className="max-w-md w-full p-6">
                        <h1 className="text-3xl font-semibold mb-6 text-black text-center">Sign Up</h1>
                        <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Join to Our Community with all time access and free </h1>

                        <form method="POST" className="space-y-4 mt-5" onSubmit={handleSubmit}>
                            {/* Your form elements go here */}
                            <div>
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                <input type="text"
                                    value={values.username} onChange={handleChange} onBlur={handleBlur}
                                    name='username' id="username" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                                {errors.username && touched.username ? <p className='text-red-500'>{errors.username}</p> : null}
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email"
                                    value={values.email} onChange={handleChange} onBlur={handleBlur}
                                    name='email' id="email" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                                {errors.email && touched.email ? <p className='text-red-500'>{errors.email}</p> : null}

                            </div>
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">Email</label>
                                <select name="countery" value={values.countery} onChange={handleCountryChange}>
                                    <option value="">select country</option>
                                    {
                                        country.map((item, index) => {
                                            return <option key={index} value={item.id}>{item.name}</option>

                                        })
                                    }
                                </select>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                <input type="password"
                                    value={values.password} onChange={handleChange} onBlur={handleBlur}
                                    name='password' id="password" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                                {errors.password && touched.password ? <p className='text-red-500'>{errors.password}</p> : null}

                            </div>
                            <div>
                                <label htmlFor="confrim_password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                                <input type="password"
                                    value={values.confrim_password} onChange={handleChange} onBlur={handleBlur}
                                    name='confrim_password' id="confrim_password" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
                                {errors.confrim_password && touched.confrim_password ? <p className='text-red-500'>{errors.confrim_password}</p> : null}

                            </div>
                            <div>
                                <button type="submit" className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:outline-none focus:bg-black  focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Sign Up</button>
                            </div>
                        </form>
                        <div className="mt-4 text-sm text-gray-600 text-center">
                            <p>Already have an account? <a href="#" className="text-black hover:underline">Login here</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form