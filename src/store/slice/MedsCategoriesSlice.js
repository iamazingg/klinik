import { createSlice } from "@reduxjs/toolkit";
const MedsCategoriesSlice = createSlice({
  name: "medsCategories",
  initialState: {
    medCategories: [],
  },
  reducers: {
    SetMedsCategories(state, action) {
      state.medCategories = action.payload;
    },
  },
});

export default MedsCategoriesSlice;
