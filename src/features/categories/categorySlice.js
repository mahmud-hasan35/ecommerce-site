
import {  createSlice } from "@reduxjs/toolkit"

const initialState = {
    categories: [],
    isLoading: false,
    isError: false,
    error: null,
};

const categorySlice = createSlice({
    name: "categories",
    initialState,
    reducers: {
        getCategories: (state, action) => {
            state.categories = action.payload;
        }
    },


})
export default categorySlice.reducer;
export const {getCategories} = categorySlice.actions;
