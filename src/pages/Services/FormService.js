import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getServices,
  saveServices,
} from "../../api/ServiceApi";
import { getServiceCategory } from "../../api/ServiceCategoryAPI";
import UiSlice from "../../store/slice/UiSlice";
import ServiceCategorySlice from "../../store/slice/ServiceCategorySlice";
import Loading from "../../components/loading/Loading";
import { useForm } from "react-hook-form";
import { rules } from "../../validations/ServicesValidation";
import { FaExclamationCircle } from "react-icons/fa";
import ServiceSlice from "../../store/slice/ServiceSlice";
import { useNavigate } from "react-router-dom";

const FormService = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const token = useSelector((state) => state.auth.token);
  const status = useSelector((state) => state.ui.status);
  const ServiceCategory = useSelector(
    (state) => state.serviceCategories.serviceCategories
  );
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    console.log(formData);
    dispatch(UiSlice.actions.setStartFetchingData);
    await saveServices(formData, token)
      .then((res) => {
        dispatch(UiSlice.actions.setSuccessFetchingData);
        dispatch(
          ServiceSlice.actions.SetService(res.data.services)
        );
        dispatch(UiSlice.actions.setIdle);
      })
      .catch((error) => {
        dispatch(UiSlice.actions.setFetchingDataError);
      });
    //navigate("/services", { replace: true });
  };
  useEffect(() => {
    dispatch(UiSlice.actions.setStartFetchingData);
    getServiceCategory(token)
      .then((res) => {
        console.log(res.data.serviceCategory);
        dispatch(UiSlice.actions.setSuccessFetchingData);
        dispatch(
          ServiceCategorySlice.actions.SetServiceCategories(
            res.data.serviceCategory
          )
        );
        dispatch(UiSlice.actions.setIdle);
      })
      .catch((error) => {
        dispatch(UiSlice.actions.setFetchingDataError);
      });
  }, [dispatch]);
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
              name="services"
              id="services"
              placeholder="Treatment"
              className="placeholder:text-gray-400 appearance-none rounded-none relative block w-full  px-3 py-2  border border-gray-300 focus:ring-indigo-500 focus:border-indigo-400 focus:z-10 focus:outline-none"
              {...register("services", rules.services)}
            />
            {errors.services && (
              <div className="group w-full  relative justify-center py-2 px-4 text-red-800">
                <span className="absolute left-0 flex items-center px-3">
                  <FaExclamationCircle className="h-5 w-5" />
                </span>
                <p className="mx-5">
                  {errors.services.message}
                </p>
              </div>
            )}
          </div>
          <div className="mx-4 my-5 flex-auto">
            <select
              name="service_category_id"
              id="service_category_id"
              placeholder="Treatment Kategori"
              className="appearance-none rounded-none relative block w-full  px-3 py-2  border border-gray-300 focus:ring-indigo-500 focus:border-indigo-400 focus:z-10 focus:outline-none"
              {...register(
                "service_category_id",
                rules.service_category_id
              )}
            >
              <option className="font-poppins text-gray-200">
                {" "}
                Pilih Kategori
              </option>
              {ServiceCategory.map((items, index) => (
                <option value={items.id} key={items.id}>
                  {items.service_categories}
                </option>
              ))}
            </select>
            {errors.service_category_id && (
              <div className="group w-full  relative justify-center py-2 px-4 text-red-800">
                <span className="absolute left-0 flex items-center px-3">
                  <FaExclamationCircle className="h-5 w-5" />
                </span>
                <p className="mx-5">
                  {errors.service_category_id.message}
                </p>
              </div>
            )}
          </div>
          <div className="mx-4 my-5 flex-auto">
            <input
              type="number"
              name="harga_wni"
              id="harga_wni"
              placeholder="Harga WNI"
              className="appearance-none rounded-none relative block w-full  px-3 py-2  border border-gray-300 focus:ring-indigo-500 focus:border-indigo-400 focus:z-10 focus:outline-none"
              {...register("harga_wni", rules.harga_wni)}
            />
            {errors.harga_wni && (
              <div className="group w-full  relative justify-center py-2 px-4 text-red-800">
                <span className="absolute left-0 flex items-center px-3">
                  <FaExclamationCircle className="h-5 w-5" />
                </span>
                <p className="mx-5">
                  {errors.harga_wni.message}
                </p>
              </div>
            )}
          </div>
          <div className="mx-4 my-5 flex-auto">
            <input
              type="number"
              name="harga_wna"
              id="harga_wna"
              placeholder="Harga WNA"
              className="appearance-none rounded-none relative block w-full  px-3 py-2  border border-gray-300 focus:ring-indigo-500 focus:border-indigo-400 focus:z-10 focus:outline-none"
              {...register("harga_wna", rules.harga_wna)}
            />
            {errors.harga_wna && (
              <div className="group w-full  relative justify-center py-2 px-4 text-red-800">
                <span className="absolute left-0 flex items-center px-3">
                  <FaExclamationCircle className="h-5 w-5" />
                </span>
                <p className="mx-5">
                  {errors.harga_wna.message}
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

export default FormService;
