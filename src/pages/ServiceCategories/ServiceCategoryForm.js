import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import UiSlice from "../../store/slice/UiSlice";
import { SaveServiceCategory } from "../../api/ServiceCategoryAPI";
import ServiceCategorySlice from "../../store/slice/ServiceCategorySlice";
import Loading from "../../components/loading/Loading";
import { ServiceCategoryRules } from "../../validations/ServiceCategoryValidation";
import { FaExclamationCircle } from "react-icons/fa";

const ServiceCategoryForm = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const status = useSelector((state) => state.ui.status);
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (formData) => {
    dispatch(UiSlice.actions.setStartFetchingData);
    await SaveServiceCategory(formData, token)
      .then((res) => {
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
              name="service_categories"
              id="service_categories"
              placeholder="Treatment"
              className="placeholder:text-gray-400 appearance-none rounded-none relative block w-full  px-3 py-2  border border-gray-300 focus:ring-indigo-500 focus:border-indigo-400 focus:z-10 focus:outline-none"
              {...register(
                "service_categories",
                ServiceCategoryRules.services_category
              )}
            />
            {errors.service_categories && (
              <div className="group w-full  relative justify-center py-2 px-4 text-red-800">
                <span className="absolute left-0 flex items-center px-3">
                  <FaExclamationCircle className="h-5 w-5" />
                </span>
                <p className="mx-5">
                  {errors.service_categories.message}
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

export default ServiceCategoryForm;
