import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,
    },
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.items.push({...action.payload, quantity: 1 });
            }
            state.total += action.payload.price;
            toast.success('Product successfully added to cart!')
        },
        removeFromCart: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items.splice(index, 1);
                state.total -= action.payload.price * action.payload.quantity;
            }
            toast.success('Product successfully remove from cart!')
        },
        clearCart: (state) => {
            state.items = [];
            state.total = 0;
            toast.success('All products are removed from cart!')
        }
    }
})



export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;