import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
    name: 'cart',
    initialState: null,
    reducer: {
        setCart: (__state, action) => action.payload,
    }
});

export const { setCart } = cart.actions;

export default cart.reducer;