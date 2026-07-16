import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/product/ProductSlice.js";
import cartReducer from "../feature/cart/CartSlice.js";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});