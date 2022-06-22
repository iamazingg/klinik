import { createSlice } from "@reduxjs/toolkit";
import { statusList } from "../../statusList";

const ServiceCategorySlice = createSlice({
  name: "serviceCategory",
  initialState: {
    serviceCategories: [],
    status: "idle",
  },
  reducers: {
    SetServiceCategories(state, action) {
      state.serviceCategories = action.payload;
    },
  },
});
export default ServiceCategorySlice;
