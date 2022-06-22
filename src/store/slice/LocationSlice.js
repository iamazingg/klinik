import { createSlice } from "@reduxjs/toolkit";
const LocationSlice = createSlice({
  name: "locationSlice",
  initialState: { locations: [], selectedLocationID: "" },
  reducers: {
    SetLocations(state, action) {
      state.locations = action.payload;
    },
    setSelectedLocation(state, action) {
      state.selectedLocationID = action.payload;
    },
  },
});

export default LocationSlice;
