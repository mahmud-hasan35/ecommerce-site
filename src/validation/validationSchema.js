
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