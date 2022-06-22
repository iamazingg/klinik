import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServiceCategory } from "../../api/ServiceCategoryAPI";
import UiSlice from "../../store/slice/UiSlice";
import ServiceCategorySlice from "../../store/slice/ServiceCategorySlice";
import { GiConsoleController } from "react-icons/gi";
import Loading from "../../components/loading/Loading";
import Table from "../../components/table/Table";
import ServiceCategoryForm from "./ServiceCategoryForm";

const ServiceCategories = () => {
  const status = useSelector((state) => state.ui.status);
  const token = useSelector((state) => state.auth.token);
  let [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const DataServiceCategories = useSelector(
    (state) => state.serviceCategories.serviceCategories
  );

  const onSearchHandler = (event) => {
    setSearch(event.target.value);
  };

  useEffect(() => {
    dispatch(UiSlice.actions.setStartFetchingData());
    getServiceCategory(token)
      .then((res) => {
        console.log(res.data);
        dispatch(UiSlice.actions.setSuccessFetchingData());
        dispatch(
          ServiceCategorySlice.actions.SetServiceCategories(
            res.data.serviceCategory
          )
        );
        dispatch(UiSlice.actions.setIdle());
      })
      .catch((err) => {
        dispatch(UiSlice.actions.setFetchingDataError());
      });
  }, [dispatch]);

  const header = [
    {
      id: 1,
      text: "Kategori",
      value: "service_categories",
    },
  ];
  let content = DataServiceCategories.filter((data) => {
    return (
      data.service_categories
        .toLowerCase()
        .indexOf(search.toLowerCase()) !== -1
    );
  });

  return (
    <div>
      {status === "process" ? (
        <Loading />
      ) : (
        <div>
          <div className="mt-3 px-6 py-6 rounded bg-white">
            <h2 className="font-poppins text-xl font-medium ">
              Tambah data Kategori Treatment
            </h2>
            <ServiceCategoryForm />
          </div>
          <div className="mt-3 py-6 px-6 rounded bg-white">
            <div className="flex my-4">
              <h2 className="font-poppins text-xl font-medium mb-4 flex-auto w-3/4">
                Data Kategori Treatment
              </h2>
              <form className="w-1/4">
                <input
                  type="text"
                  id="search"
                  name="search"
                  placeholder="Pencarian"
                  className="placeholder:text-gray-400 appearance-none rounded-none relative block w-full  px-3 py-2  border border-gray-300 focus:ring-indigo-500 focus:border-indigo-400 focus:z-10 focus:outline-none flex-auto "
                  onChange={onSearchHandler}
                  value={search}
                />
              </form>
            </div>

            <Table header={header} data={content} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceCategories;
