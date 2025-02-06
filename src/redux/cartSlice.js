import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const { productId, quantity } = action.payload;
            const existingItem = state.find((item) => item.productId === productId);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                state.push({ productId, quantity });
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
