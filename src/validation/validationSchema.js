
import * as yup from "yup";

export const categorySchema = yup
.object({
    categoryName: yup.string().required(),
    categoryImageUrl: yup.string().required().url()
})
.required();


export const productFromSchema = yup
.object({
    productName: yup.string().required(),
    productPrice: yup.number().required(),
    productImageUrl: yup.string().required().url(),
})
.required();



 export const registerValidation = yup.object().shape({
  name: yup.string().required("Name is required."),
  email: yup
    .string()
    .required("Email is required.")
    .email("Please provide a valid email."),
  password: yup.string().required("Password is required."),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required.")
    .oneOf([yup.ref("password")], "Passwords must match."),
});

 export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .required("Email is required.")
    .email("Please provide a valid email."),
  password: yup.string().required("Password is required."),
 
})
.required();