import * as Yup from 'yup'

export const loginShema = Yup.object({

    username : Yup.string().min(2).max(20).required("Please Enter Your Name") ,
    email : Yup.string().email().required("Please Enter Your Email"),
    password :Yup.string().min(6).max(10).required("Please Enter Your Password ") ,
    confrim_password :Yup.string().required("Please Enter Confirm Password")
    .oneOf([Yup.ref("password"), null], "Password Doesnt Match")


})