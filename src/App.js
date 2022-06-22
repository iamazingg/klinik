import React, { useEffect, useState } from "react";
import Login from "./pages/Login";
import { Templates } from "./templates/Templates";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.isLogin);
  console.log(isAuth);
  if (isAuth) {
    return <Templates />;
  } else {
    return <Login />;
  }
}

export default App;
