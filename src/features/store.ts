import { configureStore } from "@reduxjs/toolkit";
import booksSlice from "./books/books-slice";
import diseasesSlice from "./diseases/diseases-slice";
import imagesSlice from "./images/images-slice";
import therapistSlice from "./therapist/therapist-slice";
import userSlice from "./user/user-slice";

export const store = configureStore({
  reducer: {
    images: imagesSlice,
    user: userSlice,
    therapist: therapistSlice,
    diseases: diseasesSlice,
    books: booksSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
