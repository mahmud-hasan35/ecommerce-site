import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../features/products/productsSlice";
import categorySlice from "../features/categories/categorySlice";
import authSlice from "../features/auth/authSlice";
import cartSlice from "../features/cart/CartSlice";

const store = configureStore({
    reducer: {
        products: productsSlice,
        categories:categorySlice,
        auth: authSlice,
        carts:cartSlice,
    },
});


export default store;