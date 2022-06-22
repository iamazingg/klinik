import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import UiSlice from "../../store/slice/UiSlice";
import { saveMeds } from "../../api/MedApi";
import { GetMedsCategories } from "../../api/MedCategoriesApi";
import MedsSlice from "../../store/slice/MedsSlice";
import MedsCategoriesSlice from "../../store/slice/MedsCategoriesSlice";
import Loading from "../../components/loading/Loading";
import { MedRules } from "../../validations/MedValidation";
import { FaExclamationCircle } from "react-icons/fa";

const FormMeds = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const status = useSelector((state) => state.ui.status);
  const location_id = useSelector(
    (state) => state.auth.locations
  );
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (FormData) => {
    dispatch(UiSlice.actions.setStartFetchingData);
    await saveMeds(FormData, token)
      .then((res) => {
        dispatch(UiSlice.actions.setSuccessFetchingData);
        dispatch(MedsSlice.actions.setMeds(res.data.meds));
        dispatch(UiSlice.actions.setIdle);
      })
      .catch((err) => {
        dispatch(UiSlice.actions.setFetchingDataError);
      });
  };
  useEffect(() => {
    dispatch(UiSlice.actions.setStartFetchingData);
    GetMedsCategories(token)
      .then((res) => {
        console.log(res.data.dataMedsCategories);
        dispatch(UiSlice.actions.setSuccessFetchingData);
        dispatch(
          MedsCategoriesSlice.actions.SetMedsCategories(
            res.data.dataMedsCategories
          )
        );
        dispatch(UiSlice.actions.setIdle);
      })
      .catch((error) => {
        dispatch(UiSlice.actions.setFetchingDataError);
      });
  }, [dispatch]);
  const MedCategories = useSelector(
    (state) => state.medsCategories.medCategories
  );
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
              name="medicine"
              id="medicine"
              placeholder="Nama Obat"
              className="placeholder:text-gray-400 appearance-none rounded-none relative block w-full  px-3 py-2  border border-gray-300 focus:ring-indigo-500 focus:border-indigo-400 focus:z-10 focus:outline-none"
              {...register("medicine", MedRules.medicine)}
            />
            {errors.medicine && (
              <div className="group w-full  relative justify-center py-2 px-4 text-red-800">
                <span className="absolute left-0 flex items-center px-3">
                  <FaExclamationCircle className="h-5 w-5" />
                </span>
                <p className="mx-5">
                  {errors.medicine.message}
                </p>
              </div>
            )}
          </div>
          <div className="mx-4 my-5 flex-auto">
            <input
              type="text"
              name="sku"
              id="sku"
              placeholder="SKU"
              className="placeholder:text-gray-400 appearance-none rounded-none relative block w-full  px-3 py-2  border border-gray-300 focus:ring-indigo-500 focus:border-indigo-400 focus:z-10 focus:outline-none"
              {...register("sku", MedRules.sku)}
            />
            {errors.sku && (
              <div className="group w-full  relative justify-center py-2 px-4 text-red-800">
                <span className="absolute left-0 flex items-center px-3">
                  <FaExclamationCircle className="h-5 w-5" />
                </span>
                <p className="mx-5">{errors.sku.message}</p>
              </div>
            )}
          </div>
          <div className="mx-4 my-5 flex-auto">
            <input
              type="text"
              name="base_price"
              id="base_price"
              placeholder="Harga Beli"
              className="placeholder:text-gray-400 appearance-none rounded-none relative block w-full  px-3 py-2  border border-gray-300 focus:ring-indigo-500 focus:border-indigo-400 focus:z-10 focus:outline-none"
              {...register(
                "base_price",
                MedRules.base_price
              )}
            />
            {errors.base_price && (
              <div className="group w-full  relative justify-center py-2 px-4 text-red-800">
                <span className="absolute left-0 flex items-center px-3">
                  <FaExclamationCircle className="h-5 w-5" />
                </span>
                <p className="mx-5">
                  {errors.base_price.message}
                </p>
              </div>
            )}
          </div>
          <div className="mx-4 my-5 flex-auto">
            <select
              name="category"
              id="category"
              placeholder="Kategori"
              className="appearance-none rounded-none relative block w-full  px-3 py-2  border border-gray-300 focus:ring-indigo-500 focus:border-indigo-400 focus:z-10 focus:outline-none"
              {...register("category", MedRules.category)}
            >
              <option className="font-poppins text-gray-200">
                {" "}
                Pilih Kategori
              </option>
              {MedCategories.map((items, index) => (
                <option value={items.id} key={items.id}>
                  {items.meds_categories}
                </option>
              ))}
            </select>
            {errors.category && (
              <div className="group w-full  relative justify-center py-2 px-4 text-red-800">
                <span className="absolute left-0 flex items-center px-3">
                  <FaExclamationCircle className="h-5 w-5" />
                </span>
                <p className="mx-5">
                  {errors.category.message}
                </p>
              </div>
            )}
          </div>
          <div className="mx-4 my-5 flex-auto">
            <input
              type="hidden"
              name="location_id"
              value={location_id}
              {...register(
                "location_id",
                MedRules.location_id
              )}
            />
            <input
              type="text"
              name="qty"
              id="qty"
              placeholder="Stok"
              className="placeholder:text-gray-400 appearance-none rounded-none relative block w-full  px-3 py-2  border border-gray-300 focus:ring-indigo-500 focus:border-indigo-400 focus:z-10 focus:outline-none"
              {...register("qty", MedRules.qty)}
            />
            {errors.qty && (
              <div className="group w-full  relative justify-center py-2 px-4 text-red-800">
                <span className="absolute left-0 flex items-center px-3">
                  <FaExclamationCircle className="h-5 w-5" />
                </span>
                <p className="mx-5">{errors.qty.message}</p>
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
              {...register("harga_wni", MedRules.harga_wni)}
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
              {...register("harga_wna", MedRules.harga_wna)}
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

export default FormMeds;
