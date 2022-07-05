import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { rules } from "../validations/AuthValidation";
import { FaExclamationCircle } from "react-icons/fa";
import { login } from "../api/auth";
import { useDispatch, useSelector } from "react-redux";
import LoginSlice from "../store/slice/LoginSlice";
import { useNavigate } from "react-router-dom";
import { GetLocations } from "../api/LocationsApi";
import LocationSlice from "../store/slice/LocationSlice";
import UiSlice from "../store/slice/UiSlice";

function Login() {
  const dispatch = useDispatch();
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    console.log(formData.locations);
    await login(formData)
      .then((res) => {
        dispatch(LoginSlice.actions.SetIsLogin(true));
        dispatch(
          LoginSlice.actions.SetUserData(res.data.user.id)
        );
        dispatch(
          LoginSlice.actions.SetToken(res.data.access_token)
        );
        dispatch(
          LoginSlice.actions.SetLocation(formData.locations)
        );
        localStorage.setItem("isAuth", true);
        localStorage.setItem("userID", res.data.user.id);
        localStorage.setItem(
          "access_token",
          res.data.access_token
        );
        localStorage.setItem(
          "locations",
          formData.locations
        );
      })
      .catch((e) => {
        console.log(e.response);
      });
  };
  useEffect(() => {
    dispatch(UiSlice.actions.setStartFetchingData);
    GetLocations()
      .then((res) => {
        dispatch(UiSlice.actions.setSuccessFetchingData);
        dispatch(
          LocationSlice.actions.SetLocations(
            res.data.dataLocations
          )
        );
        dispatch(UiSlice.actions.setIdle);
      })
      .catch((err) => {
        dispatch(UiSlice.actions.setFetchingDataError);
      });
  }, [dispatch]);
  const locations = useSelector(
    (state) => state.locations.locations
  );
  return (
    <div className="h-screen flex items-center justify-center  bg-indigo-700 py-12">
      <div className="max-w-md w-full bg-white rounded-md">
        <h1 className="text-center font-poppins text-3xl font-extrabold uppercase mt-6">
          Login
        </h1>
        <p className="text-center font-poppins mt-2 mb-2">
          Sign in to your accounts
        </p>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mx-4 my-5">
            <label className="w-full font-poppins">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="example test@test.com"
              className="appearance-none rounded-none relative block w-full px-3 py-2  border border-gray-300 focus:ring-indigo-500 focus:border-indigo-400 focus:z-10 focus:outline-none"
              {...register("email", rules.email)}
            />
            {errors.email && (
              <div className="group w-full  relative justify-center py-2 px-4 text-red-800">
                <span className="absolute left-0 flex items-center px-3">
                  <FaExclamationCircle className="h-5 w-5" />
                </span>
                <p className="mx-5">
                  {errors.email.message}
                </p>
              </div>
            )}
          </div>
          <div className="mx-4 my-5">
            <label className="w-full font-poppins">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="only you and God who knew it"
              className="appearance-none rounded-none relative block w-full px-3 py-2  border border-gray-300 focus:ring-indigo-500 focus:border-indigo-400 focus:z-10 focus:outline-none"
              {...register("password", rules.password)}
            />
            {errors.password && (
              <div className="group w-full  relative justify-center py-2 px-4 text-red-800">
                <span className="absolute left-0 flex items-center px-3">
                  <FaExclamationCircle className="h-5 w-5" />
                </span>
                <p className="mx-5">
                  {errors.password.message}
                </p>
              </div>
            )}
          </div>
          <div className="mx-4 my-5 flex-auto">
            <select
              name="locations"
              id="locations"
              placeholder="Lokasi"
              className="appearance-none rounded-none relative block w-full  px-3 py-2  border border-gray-300 focus:ring-indigo-500 focus:border-indigo-400 focus:z-10 focus:outline-none"
              {...register("locations", rules.locations)}
            >
              <option
                className="font-poppins text-gray-200"
                value={" "}
              >
                Pilih Lokasi
              </option>
              {locations.map((items, index) => (
                <option value={items.id} key={items.id}>
                  {items.clinic_name}
                </option>
              ))}
            </select>
            {errors.locations && (
              <div className="group w-full  relative justify-center py-2 px-4 text-red-800">
                <span className="absolute left-0 flex items-center px-3">
                  <FaExclamationCircle className="h-5 w-5" />
                </span>
                <p className="mx-5">
                  {errors.locations.message}
                </p>
              </div>
            )}
          </div>
          <div className="mx-4 my-5">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
