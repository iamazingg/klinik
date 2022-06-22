import { createSlice } from "@reduxjs/toolkit";
import { statusList } from "../../statusList";

const UiSlice = createSlice({
  name: "ui",
  initialState: {
    isActiveSidebar: true,
    status: statusList.idle,
  },
  reducers: {
    setIsActiveSidebar(state, action) {
      state.isActiveSidebar = action.payload;
    },
    setStartFetchingData(state) {
      state.status = statusList.process;
    },
    setFetchingDataError(state) {
      state.status = statusList.error;
    },
    setSuccessFetchingData(state) {
      state.status = statusList.success;
    },
    setIdle(state) {
      state.status = statusList.idle;
    },
  },
});

export const uiAction = UiSlice.actions;
export default UiSlice;
