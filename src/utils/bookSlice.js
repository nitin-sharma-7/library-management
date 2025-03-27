import { createSlice } from "@reduxjs/toolkit";
import { books } from "./books";
const bookSlice = createSlice({
  name: "books",
  initialState: {
    items: books,
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = bookSlice.actions;
export default bookSlice.reducer; // it become bookReducer
