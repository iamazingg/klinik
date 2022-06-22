import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import UiSlice from "../../store/slice/UiSlice";
import LocationSlice from "../../store/slice/LocationSlice";
import { LocationValidation } from "../../validations/LocationValidation";
import Loading from "../../components/loading/Loading";
import { FaExclamationCircle } from "react-icons/fa";
import { SaveLocation } from "../../api/LocationsApi";

const FormLocation = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const status = useSelector((state) => state.ui.status);
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (FormData) => {
    dispatch(UiSlice.actions.setStartFetchingData);
    await SaveLocation(FormData, token)
      .then((res) => {
        console.log(res.data.dataLocations);
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
  };
  return (
    <div>
      {status === "process" ? (
        <Loading />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-row w-full"
        >
          <div className="mx-4 my-5 flex-auto">
            <input
              type="text"
              name="clinic_name"
              id="clinic_name"
              placeholder="Nama Klinik"
              className="placeholder:text-gray-400 appearance-none rounded-none relative block w-full  px-3 py-2  border border-gray-300 focus:ring-indigo-500 focus:border-indigo-400 focus:z-10 focus:outline-none"
              {...register(
                "clinic_name",
                LocationValidation.clinic_name
              )}
            />
            {errors.clinic_name && (
              <div className="group w-full  relative justify-center py-2 px-4 text-red-800">
                <span className="absolute left-0 flex items-center px-3">
                  <FaExclamationCircle className="h-5 w-5" />
                </span>
                <p className="mx-5">
                  {errors.clinic_name.message}
                </p>
              </div>
            )}
          </div>
          <div className="mx-4 my-5 flex-auto">
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Alamat"
              className="placeholder:text-gray-400 appearance-none rounded-none relative block w-full  px-3 py-2  border border-gray-300 focus:ring-indigo-500 focus:border-indigo-400 focus:z-10 focus:outline-none"
              {...register(
                "address",
                LocationValidation.address
              )}
            />
            {errors.address && (
              <div className="group w-full  relative justify-center py-2 px-4 text-red-800">
                <span className="absolute left-0 flex items-center px-3">
                  <FaExclamationCircle className="h-5 w-5" />
                </span>
                <p className="mx-5">
                  {errors.address.message}
                </p>
              </div>
            )}
          </div>

          <div className="mx-4 my-5 flex-auto">
            <button
              type="submit"
              className="place-self-center self-center group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormLocation;
