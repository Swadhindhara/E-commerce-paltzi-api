import { configureStore } from "@reduxjs/toolkit";
import productReducer from '../features/products/productSlice'
import authReducer from '../features/auth/authSlice'
import userReducer from '../features/user/userSlice'
import categoryReducer from '../features/Categories/categorySlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        categories: categoryReducer,
        user: userReducer,
        products: productReducer,
    }
})

export default store;