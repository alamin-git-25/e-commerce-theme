import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import { baseApi } from "./api/baseApi";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
});

export default store;
