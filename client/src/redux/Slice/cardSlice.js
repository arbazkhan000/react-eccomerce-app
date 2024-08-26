import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addTocart: (state, action) => {
            const itemExists = state.find(
                (item) => item.id === action.payload.id
            );
            if (itemExists) {
                itemExists.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 });
            }
        },
        removeTocart: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        },
        Decrement: (state, action) => {
            return state.map((item) =>
                item.id === action.payload.id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            );
        },
    },
});

export const { addTocart, removeTocart, Decrement } = cartSlice.actions;
export default cartSlice.reducer;
