
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { getDatabase, push, ref, } from "firebase/database";
import app from "../database/firabaseConfig";

export default function CreateCategory() {

    const schema = yup
        .object({
            categoryName: yup.string().required(),
            categoryImageUrl: yup.string().required().url()
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    // data push in database

    const onSubmit = (data) => {
        const db = getDatabase(app);
    push(ref(db, 'categories/'), data);
};   

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>
            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                {/* Product Name */}
                <div>
                    <label
                        htmlFor="categoryName"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Category Name
                    </label>
                    <input
                        {...register("categoryName")}

                        type="text"
                        id="categoryName"
                        name="categoryName"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter product name"
                    />
                    {errors.categoryName && <span className="text-red-500">{errors.categoryName?.message}</span>}
                </div>

                {/* Product Image URL */}
                <div>
                    <label
                        htmlFor="categoryImageUrl"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Category Image URL
                    </label>
                    <input
                        {...register("categoryImageUrl")}
                        type="url"
                        id="categoryImageUrl"
                        name="categoryImageUrl"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Enter product image URL"
                    />
                    {errors.categoryImageUrl && <span className="text-red-500">{errors.categoryImageUrl?.message}</span>}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}
