import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productAPI from "./productAPI";


export const fetchProducts = createAsyncThunk('products/fetchProducts', async(_, thunkAPI) => {
    try {
        const products = await productAPI.getAllProducts();
        return products;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message || "Failed to fetch products");
    }
})

export const fetchSingleProduct = createAsyncThunk('products/fetchSingleProduct', async(slug, thunkAPI) => {
    try {
        const response = await productAPI.getSingleProduct(slug);
        console.log(response);
        return response;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message || "Failed to fetch product");
    }
});


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        product: null,
        products: [],
        isLoading: false,
        isError: false,
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.error(action.payload);
        })

        // ============= For single product ======================
        .addCase(fetchSingleProduct.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(fetchSingleProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.product = action.payload;
        })
        .addCase(fetchSingleProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            console.error(action.payload);
        })
    }
})


export default productsSlice.reducer;