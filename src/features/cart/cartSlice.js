import { createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,
        referenceID: ""
    },
    reducers: {
        addToCart: (state, action) => {
            const { id, price, quantity = 1 } = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.items.push({ ...action.payload, quantity });
            }

            state.total += price * quantity;
            toast.success(`${quantity} product(s) successfully added to cart!`);
        },

        removeFromCart: (state, action) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);

            if (index !== -1) {
                const item = state.items[index];
                state.total -= item.price * item.quantity;
                state.items.splice(index, 1);
                toast.success('Product successfully removed from cart!');
            }
        },

        clearCart: (state) => {
            state.items = [];
            state.total = 0;
            toast.success('All products are removed from cart!');
        },

        addReferenceId: (state, action) => {
            state.referenceID = action.payload;
        }
    }
});

export const { addToCart, removeFromCart, clearCart, addReferenceId } = cartSlice.actions;
export default cartSlice.reducer;
