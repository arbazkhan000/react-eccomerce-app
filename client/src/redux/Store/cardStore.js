import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../Slice/cardSlice";

export const cartStore = configureStore({
    reducer: {
        cart: cardReducer,
    },
});
