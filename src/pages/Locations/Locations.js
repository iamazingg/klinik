import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetLocations } from "../../api/LocationsApi";
import UiSlice from "../../store/slice/UiSlice";
import LocationSlice from "../../store/slice/LocationSlice";
import Loading from "../../components/loading/Loading";
import Table from "../../components/table/Table";
import FormLocation from "./FormLocation";

const Locations = () => {
  let [search, setSearch] = useState("");
  const token = useSelector((state) => state.auth.token);
  const status = useSelector((state) => state.ui.status);
  const dispatch = useDispatch();
  const header = [
    { id: 1, text: "Nama Klinik", value: "clinic_name" },
    { id: 2, text: "Alamat", value: "address" },
  ];
  const onSearchHandler = (event) => {
    setSearch(event.target.value);
  };
  const Locations = useSelector(
    (state) => state.locations.locations
  );
  const content = Locations.filter((data) => {
    return (
      data.clinic_name
        .toLowerCase()
        .indexOf(search.toLowerCase()) !== -1
    );
  });
  useEffect(() => {
    dispatch(UiSlice.actions.setStartFetchingData);
    GetLocations(token)
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
  const edit = (data) => {
    dispatch(
      LocationSlice.actions.setSelectedLocation(data)
    );
  };
  return (
    <div>
      {status === "process" ? (
        <Loading />
      ) : (
        <div>
          <div className="mt-3 px-6 py-6 rounded bg-white">
            <h2 className="font-poppins text-xl font-medium ">
              Tambah data Lokasi Klinik
            </h2>
            <FormLocation />
          </div>
          <div className="mt-3 py-6 px-6 rounded bg-white">
            <div className="flex my-4">
              <h2 className="font-poppins text-xl font-medium mb-4 flex-auto w-3/4">
                Data Lokasi Klinik
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

            <Table
              header={header}
              data={content}
              isEditable
              isDeleteableOnClick={() => edit(1)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Locations;
