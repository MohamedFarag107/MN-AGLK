import { createSlice } from "@reduxjs/toolkit";

interface TherapistState {
  therapist: {
    name?: string;
    email?: string;
    password?: string;
    type?: string;
    profileImage?: string;
    reservations?: [];
    numberOfReservations?: number;
    price?: number;
    rating?: number;
    specialization?: string;
    _id?: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
  }[];
}

const initialState: TherapistState = {
  therapist: [],
};
const therapistSlice = createSlice({
  name: "therapist",
  initialState,
  reducers: {
    setTherapist(state, action) {
      state.therapist = action.payload;
    },
  },
});

export default therapistSlice.reducer;

export const {setTherapist} = therapistSlice.actions;
