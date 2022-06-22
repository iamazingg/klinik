import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetMedsCategories } from "../../api/MedCategoriesApi";
import UiSlice from "../../store/slice/UiSlice";
import MedsCategoriesSlice from "../../store/slice/MedsCategoriesSlice";
import Loading from "../../components/loading/Loading";
import Table from "../../components/table/Table";
import FormMedsCategories from "./FormMedsCategories";

const MedsCategories = () => {
  let [search, setSearch] = useState("");
  const token = useSelector((state) => state.auth.token);
  const status = useSelector((state) => state.ui.status);
  const dispatch = useDispatch();
  const header = [
    {
      id: 1,
      text: "Kategori Obat",
      value: "meds_categories",
    },
  ];
  const onSearchHandler = (event) => {
    setSearch(event.target.value);
  };
  const medsCategories = useSelector(
    (state) => state.medsCategories.medCategories
  );
  let content = medsCategories.filter((data) => {
    return (
      data.meds_categories
        .toLowerCase()
        .indexOf(search.toLowerCase()) !== -1
    );
  });
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
  return (
    <div>
      {status === "process" ? (
        <Loading />
      ) : (
        <div>
          <div className="mt-3 px-6 py-6 rounded bg-white">
            <h2 className="font-poppins text-xl font-medium ">
              Tambah data kategori obat
            </h2>
            <FormMedsCategories />
          </div>
          <div className="mt-3 py-6 px-6 rounded bg-white">
            <div className="flex my-4">
              <h2 className="font-poppins text-xl font-medium mb-4 flex-auto w-3/4">
                Data Kategori Obat
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

export default MedsCategories;
