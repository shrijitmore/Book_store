import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Components/Slices/userSlice";
import cartReducer from "../Components/Slices/cartSlice";

export const store = configureStore({
  reducer: {
    userData: userReducer,
    cartData: cartReducer,
  },
});