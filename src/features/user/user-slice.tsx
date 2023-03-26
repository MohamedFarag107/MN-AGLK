import { createSlice } from "@reduxjs/toolkit";
// "data": {
//   "name": "mohamed",
//   "email": "mf1456@fayoum.edu.eg",
//   "password": "$2b$12$Qe7Iml/o0y94HJeYEMDTK.4ypBudIS.uFK5ws2HMfjad3OTn777ke",
//   "type": "admin",
//   "profileImage": "",
//   "reservations": [],
//   "numberOfReservations": 0,
//   "price": 0,
//   "rating": 0,
//   "specialization": "",
//   "_id": "641f0cda2d520aabfb6991cd",
//   "createdAt": "2023-03-25T15:01:46.451Z",
//   "updatedAt": "2023-03-25T15:01:46.451Z",
//   "__v": 0
// },

export interface UserState {
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
  token?: string;
}

const initialState: UserState = {
  type: "",
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loadUser(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.type = action.payload.type;
      state.profileImage = action.payload.profileImage;
      state.reservations = action.payload.reservations;
      state.numberOfReservations = action.payload.numberOfReservations;
      state.price = action.payload.price;
      state.rating = action.payload.rating;
      state.specialization = action.payload.specialization;
      state._id = action.payload._id;
      state.createdAt = action.payload.createdAt;
      state.updatedAt = action.payload.updatedAt;
      state.__v = action.payload.__v;
      state.token = action.payload.token;
    },
  },
});

export default userSlice.reducer;

export const { loadUser } = userSlice.actions;
