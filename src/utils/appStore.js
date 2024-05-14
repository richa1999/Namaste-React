import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// create a store
const appStore = configureStore({
    // one reducer for whole app which have multiple reducers
    reducer: {
        cart: cartReducer,
    },
});

export default appStore;