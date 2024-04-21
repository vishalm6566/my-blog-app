import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartSlice";
import userSlice from "./features/userSlice";
import blogSlice from "./features/blogSlice";
import categorySlice from "./features/categorySlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    user: userSlice,
    blog: blogSlice,
    category : categorySlice,
  },
});
