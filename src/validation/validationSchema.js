
import * as yup from "yup";

export const categorySchema = yup
.object({
    categoryName: yup.string().required(),
    categoryImageUrl: yup.string().required().url()
})
.required();