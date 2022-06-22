import { createSlice } from "@reduxjs/toolkit";

const isAuth = localStorage.getItem("isAuth");
const token = localStorage.getItem("access_token");
const userID = localStorage.getItem("userID");
const locations = localStorage.getItem("locations");
const LoginSlice = createSlice({
  name: "login",
  initialState: {
    isLogin: isAuth ? isAuth : false,
    token: isAuth ? token : "",
    userData: isAuth ? userID : "",
    locations: isAuth ? locations : "",
  },
  reducers: {
    SetIsLogin(state, action) {
      state.isLogin = action.payload;
    },
    SetUserData(state, action) {
      state.userData = action.payload;
    },
    SetToken(state, action) {
      state.token = action.payload;
    },
    SetLocation(state, action) {
      state.locations = action.payload;
    },
  },
});
export default LoginSlice;
