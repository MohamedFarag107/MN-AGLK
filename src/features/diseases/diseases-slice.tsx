import { createSlice } from "@reduxjs/toolkit";
 
interface DiseasesState {
  diseases: {
    name: string;
    symptoms: string[];
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
  }[]


}

const initialState: DiseasesState = {
  diseases: [],
};
const diseasesSlice = createSlice({
  name: "diseases",
  initialState,
  reducers: {
    setDiseases(state, action) {
      state.diseases = action.payload;
    },
    addDiseases(state, action) {
      state.diseases.push(action.payload);
    }
  },
});

export default diseasesSlice.reducer;

export const { setDiseases, addDiseases } = diseasesSlice.actions;
