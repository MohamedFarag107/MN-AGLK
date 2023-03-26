import { createSlice } from "@reduxjs/toolkit";

interface BookState {
  books: {
    title?: string;
    author?: string;
    description?: string;
    bookImage?: string;
    bookFile?: string;
    _id?: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
  }[];
}

const initialState: BookState = {
  books: [],
};
const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBook(state, action) {
      state.books = action.payload;
    },
  },
});

export default bookSlice.reducer;

export const { setBook } = bookSlice.actions;
