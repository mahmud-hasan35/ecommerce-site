import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getFirebaseData, removeDataFromFirebase, setDataToFirebase } from "../../database/firebaseUtils"

const initialState = {
    products:[],
    isLoading:false,
    isError: false,
    error: null,
};

export const getProducts = createAsyncThunk("products/getProducts", async () => {
   let data = await getFirebaseData("products");
   return data

});

export const  deleteProducts = createAsyncThunk("products/deleteProducts" , async(id) => {
    const respons = await removeDataFromFirebase("products/" + id)
    return id
});

const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            setDataToFirebase("products", action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase (getProducts.pending, (state, action) => {
            state.isError = false
            state.isLoading = true;
        });
        builder.addCase (getProducts.fulfilled, (state, action) => {
            state.isLoading = false,
            state.products = action.payload;
            
        });

        builder.addCase (getProducts.rejected, (state, action) => {
            
            state.isError = true,
            state.error = action.payload.error?.message;

        });


         builder.addCase(deleteProducts.fulfilled,(state,action) => {
                    const productIndex = state.products.findIndex(
                        (item) => item.id == action.payload
                    );
                    state.products.splice(productIndex, 1 )
                });
                builder.addCase(deleteProducts.rejected, (state, action) => {
                    state.isError = true,
                    state.error = action.payload.error?.message
        
                });
    }
});
export default productsSlice.reducer;
export const { setProducts } = productsSlice.actions