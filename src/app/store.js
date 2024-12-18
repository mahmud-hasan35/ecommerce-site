import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import categorySlice from "../features/categories/categorySlice";
import authSlice from "../features/auth/authSlice"

const store = configureStore({
    reducer: {
        products: productsSlice,
        categories:categorySlice,
        auth: authSlice
    },
});


export default store;