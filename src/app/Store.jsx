import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../feature/product/productSlice";
import cartReducer from "../feature/Cart/CartSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});