import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./features/userSlice";
import blogSlice from "./features/blogSlice";
import categorySlice from "./features/categorySlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    blog: blogSlice,
    category : categorySlice,
  },
});
