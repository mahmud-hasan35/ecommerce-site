

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { productFromSchema } from "../../../validation/validationSchema";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { setProducts } from "../../../features/products/productsSlice";
import { getFirebaseDataEdit, updateFirebaseData } from "../../../database/firebaseUtils";
import { useEffect } from "react";
import { toast } from "react-toastify";

export default function CreateProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const params = useParams();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset

    } = useForm({
        resolver: yupResolver(productFromSchema),
        defaultValues: {
            productName: "",
            productPrice: "",
            productImageUrl: "",

        }
    });

    // data push in database

    const onSubmit = (data) => {
        if (params.id) {
            updateFirebaseData(`products/${params.id}`, data);
             toast.success("update is successful", {
                            position: "top-center"
                        });

        } else {
            dispatch(setProducts(data));
        }
        navigate("/")
    }

        useEffect(() => {
            async function getData() {

                let res = await getFirebaseDataEdit("products/" + params.id);
                reset(res);
                console.log(res);
            }

            if (params.id) {
                getData();
            }
            else reset({
                ProductName: "",
                productPrice: "",
                ProductImageUrl: "",
            })

        }, [params])


        return (
            <div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 shadow-md rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-center">{params.id ? "Edit Product" : "Add Product"}</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Product Name */}
                    <dikv>
                        <label
                            htmlFor="productName"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Product Name
                        </label>
                        <input
                            {...register("productName")}
                            type="text"
                            id="productName"
                            name="productName"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter product name"

                        />
                        {errors.productName && <span className="text-red-600">{errors.productName?.message}</span>}
                    </dikv>

                    {/* Product Price */}
                    <div>
                        <label
                            htmlFor="productPrice"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Product Price
                        </label>
                        <input
                            {...register("productPrice")}
                            type="number"
                            id="productPrice"
                            name="productPrice"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter product price"

                        />
                        {errors.productPrice && <span className="text-red-600">{errors.productPrice?.message}</span>}
                    </div>


                    {/* Product Image URL */}
                    <div>
                        <label
                            htmlFor="productImageUrl"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Product Image URL
                        </label>
                        <input
                            {...register("productImageUrl")}

                            type="url"
                            id="productImageUrl"
                            name="productImageUrl"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Enter product image URL"

                        />
                        {errors.productImageUrl && <span className="text-red-600">{errors.productImageUrl?.message}</span>}

                    </div>


                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                    >
                        {params.id ?"Update Product": "Edit Product" }

                    </button>
                </form>
            </div>
        );
    }
