import { createSlice } from "@reduxjs/toolkit";

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  services: [],
  currentPage: 1,
  totalItems: -1,
  perPage: 50,
  category: "",
  status: statusList.idle,
};

const ServiceSlice = createSlice({
  name: "services",
  initialState,
  reducers: {
    SetService(state, action) {
      state.services = action.payload;
    },
    StartFetchingData(state) {
      state.status = statusList.process;
    },
    SuccessFetchingData(state) {
      state.status = statusList.success;
    },
    errorFetchingData(state) {
      state.status = statusList.error;
    },
  },
});

export default ServiceSlice;
