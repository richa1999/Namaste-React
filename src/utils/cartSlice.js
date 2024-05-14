import { createSlice } from "@reduxjs/toolkit";

// redux slice
const CartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    // small reducers functions
    reducers: {
        // reducrer functions which will be called by dispatch an action
        addToCart: (state, action) => {
            // const item = action.payload;
            // const existingItem = state.cartItems.find((i) => i.id === item.id);
            // if (existingItem) {
            //     existingItem.quantity += 1;
            // } else {
            //     state.cartItems.push({ ...item, quantity: 1 });
            // }

            // Vanilla(older) Redux => DON"T MUTATE STATE, returning was mandatory
            // const newState = [...state];
            // newState.push(action.payload);
            // return newState;

            // Redux Toolkit -> WE HAVE TO  MUTATE STATE => It is doing same thing as vanilla redux in background using immer library => find difference b/w older and new state and returns immutable state.
            state.cartItems.push(action.payload);
        },
        removeFromCart: (state, action) => {
            const id = action.payload;
            state.cartItems = state.cartItems.filter((i) => i.id !== id);
        },
        clearCart: (state) => {
            state.cartItems.length = 0;
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = CartSlice.actions;

export default CartSlice.reducer;