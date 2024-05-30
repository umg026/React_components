import * as Yup from 'yup'

export const practiceForm = Yup.object({
    
    name: Yup.string().min(2).max(10).required("Please Enter Your Name "),
    country: Yup.string().required("Please select Country"),
    address: Yup.string().required("Please Enter Adrees")
})