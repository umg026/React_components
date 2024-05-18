import React, { useState } from 'react'

export default function FormValidation() {

    const [formData, setFormData] = useState({ // state For FormData
        username: "",
        email: "",
        password: ""
    })
    const [errors, setErrors] = useState({ // State For Error
        username: "",
        email: "",
        password: ""
    });

    const handelChnage = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    // Validation
    function validation() {
        let isValid = true;
        let errors = {};

        if (formData.username === "") {
            isValid = false;
            errors.username = "Please enter username";
        }

        if (formData.email === "") {
            isValid = false;
            errors.email = "Please enter email";
        }

        if (formData.password === "") {
            isValid = false;
            errors.password = "Please enter password";
        }

        setErrors(errors);
        return isValid;
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        if (validation()) {

            console.log(formData);
        }
    }

    return (
        <>
            <form onSubmit={handelSubmit} action="" className='flex flex-col justify-center items-center'>
                <div>
                    <label htmlFor="" className='text-3xl'>UserName :</label>
                    <input type="text" value={formData.username} onChange={handelChnage} name='username' placeholder='enter ' />
                    {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
                </div>
                <div>
                    <label htmlFor="">Email :</label>
                    <input type="email" value={formData.email} onChange={handelChnage} name='email' placeholder='enter ' />
                    {errors.email && <p style={{ color: 'red' }}> {errors.email}</p>}
                </div>
                <div>
                    <label htmlFor="">Pass  word :</label>
                    <input type="password" value={formData.password} onChange={handelChnage} name='password' placeholder='enter ' />
                    {errors.password && <p style={{ color: 'red' }}> {errors.password}</p>}

                </div>
                <button type='submit'>Submit </button>
            </form>
        </>
    )
}
