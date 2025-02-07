import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { productId, quantity, color, size, name, image, price } = action.payload;

            const existingProductIndex = state.items.findIndex(
                item => item.productId === productId && item.color === color && item.size === size
            );

            if (existingProductIndex >= 0) {
                state.items[existingProductIndex].quantity += quantity;
            } else {
                state.items.push({ productId, quantity, color, size, name, image, price });
            }
        },
        changeQuantity: (state, action) => {
            const { productId, quantity } = action.payload;
            const indexOfId = (state.items).findIndex(item => item.productId === productId);
            if (quantity > 0) {
                state.items[indexOfId].quantity = quantity
            } else {
                state.items = (state.items).filter(item => item.productId !== productId)
            }
        },
        removeCart: (state, action) => {
            const { productId } = action.payload
            state.items = state.items.filter((item) => item.productId !== productId)
        }
    },
});

export const { addToCart, changeQuantity, removeCart } = cartSlice.actions;
export default cartSlice.reducer;
