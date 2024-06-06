import * as Yup from "yup"

export const validation = Yup.object({
    username : Yup.string().min(3).max(20).required("Please enter your name"),
    email: Yup.string().email().required("please enter email"),
    password: Yup.string().min(3).max(10).required("please enter password"),
    confrim_password: Yup.string().required("please enter confirm password")
        .oneOf([Yup.ref("password"), null], "password doen't match")
})