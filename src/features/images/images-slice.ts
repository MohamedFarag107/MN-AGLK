import { createSlice } from "@reduxjs/toolkit";

interface ImagesState {
  footer: string;
  nav: string;
  landing: string;
}

const initialState: ImagesState = {
  landing: "https://firebasestorage.googleapis.com/v0/b/mn-aglk.appspot.com/o/landing%20(2).png?alt=media&token=9c22c3e0-9985-4207-8583-d057e2615234",
  footer:
    "https://firebasestorage.googleapis.com/v0/b/mn-aglk.appspot.com/o/FOOTER.png?alt=media&token=43ada878-22c3-45f6-b3e4-f843d3ef5206",
  nav: "https://firebasestorage.googleapis.com/v0/b/mn-aglk.appspot.com/o/Mask%20Group%201.png?alt=media&token=3cf24a75-c641-4502-816b-3940b93527c4",
};
const imagesSlice = createSlice({
  name: "images",
  initialState,
  reducers: {},
});

export default imagesSlice.reducer;

export const {} = imagesSlice.actions;
