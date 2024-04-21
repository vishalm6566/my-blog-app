import { createSlice } from "@reduxjs/toolkit";
import BlogList from "../pages/BlogList";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    items: [],
  },
  reducers: {
    addBlogAction: (state, action) => {
      state.items.push(action.payload);
    },

    addAllBlogAction: (state, action) => {
      state.items = action.payload;
    },

    removeBlogAction: (state, action) => {
      const blog = action.payload;
      for (let index = 0; index < state.items.length; index++) {
        console.log(blog);
        // search the property to be removed from the state
        if (state.items[index].id == blog.id) {
          state.items.splice(index, 1);
          break;
        }
      }
    },
  },
});

export const { addBlogAction, removeBlogAction, addAllBlogAction } =
  blogSlice.actions;
export default blogSlice.reducer;
