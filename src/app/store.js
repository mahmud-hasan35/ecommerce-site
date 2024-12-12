import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import categorySlice from "../features/categories/categorySlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        categories:categorySlice
    },
});


export default store;