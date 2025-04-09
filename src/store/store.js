import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/products/productSlice";
import authReducer from "../features/auth/authSlice";
import userReducer from "../features/user/userSlice";
import categoryReducer from "../features/Categories/categorySlice";
import cartReducer from '../features/cart/cartSlice'

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    categories: categoryReducer,
    products: productReducer,
    cart: cartReducer
  },
});

export default store;
