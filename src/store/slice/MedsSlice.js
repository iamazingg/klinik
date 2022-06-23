import { createSlice } from "@reduxjs/toolkit";
const MedsSlice = createSlice({
  name: "meds",
  initialState: {
    meds: [],
    selectedMeds: "",
  },
  reducers: {
    setMeds(state, action) {
      state.meds = action.payload;
    },
    setSelectedMeds(state, action) {
      state.selectedMeds = action.payload;
    },
  },
});

export default MedsSlice;
