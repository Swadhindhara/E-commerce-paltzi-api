import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../features/auth/authSlice'
import userReducer from '../features/user/userSlice'
import productReducer from '../features/products/productSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        products: productReducer,
    }
})

export default store;