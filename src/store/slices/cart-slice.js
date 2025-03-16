//createslice
//initialize initial state
//slice -> name, mention initial state, actions

import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
            addToCart(state, action) {
                state.push(action.payload)
                console.log(action);                
            },
            removeFromCart(state, action) {
                return state.filter(item => item.id !== action.payload)
            }
        },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
