import { createSlice } from "@reduxjs/toolkit";
// import BlogList from "../components/BlogList";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    items: [],
  },
  reducers: {
    addCategoryAction: (state, action) => {
      console.log(action.payload);
      state.items.push(action.payload);
    },

    addAllCategoryAction: (state, action) => {
      state.items = action.payload;
    },

    removeCategoryAction: (state, action) => {
      const category = action.payload;
      for (let index = 0; index < state.items.length; index++) {
        console.log(category);
        // search the property to be removed from the state
        if (state.items[index].id == category.id) {
          state.items.splice(index, 1);
          break;
        }
      }
    },
  },
});

export const { addCategoryAction, addAllCategoryAction, removeCategoryAction } =
  categorySlice.actions;
export default categorySlice.reducer;
