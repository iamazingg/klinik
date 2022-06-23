import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetMeds } from "../../api/MedApi";
import UiSlice from "../../store/slice/UiSlice";
import MedsSlice from "../../store/slice/MedsSlice";
import Loading from "../../components/loading/Loading";
import Table from "../../components/table/Table";
import FormMeds from "./FormMeds";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";

const Meds = () => {
  let [search, setSearch] = useState("");
  const token = useSelector((state) => state.auth.token);
  const locationID = useSelector(
    (state) => state.auth.locations
  );
  let dataObat;
  const status = useSelector((state) => state.ui.status);
  const dispatch = useDispatch();
  const onSearchHandler = (event) => {
    setSearch(event.target.value);
  };
  const Meds = useSelector((state) => state.meds.meds);
  let content = Meds.filter((data) => {
    return (
      data.med
        .toLowerCase()
        .indexOf(search.toLowerCase()) !== -1
    );
  });

  useEffect(() => {
    dispatch(UiSlice.actions.setStartFetchingData);
    GetMeds(locationID, token)
      .then((res) => {
        dispatch(UiSlice.actions.setSuccessFetchingData);
        dispatch(MedsSlice.actions.setMeds(res.data.meds));
        dispatch(UiSlice.actions.setIdle);
      })
      .catch((error) => {
        dispatch(UiSlice.actions.setFetchingDataError);
      });
  }, [dispatch]);

  const edit = (data) => {
    const dataObat = Meds.filter(
      (med) => med.id === data
    ).map((data) => {
      dispatch(MedsSlice.actions.setSelectedMeds(data));
    });
  };
  return (
    <div>
      {status === "process" ? (
        <Loading />
      ) : (
        <div>
          <div className="mt-3 px-6 py-6 rounded bg-white">
            <h2 className="font-poppins text-xl font-medium ">
              Tambah data obat
            </h2>
            <FormMeds dataObat={dataObat} />
          </div>
          <div className="mt-3 py-6 px-6 rounded bg-white">
            <div className="flex my-4">
              <h2 className="font-poppins text-xl font-medium mb-4 flex-auto w-3/4">
                Data Obat
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
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
              <thead className="text-xs text-gray-700 uppercase bg-gray-500">
                <tr>
                  <td className="px-6 py-3 text-white font-bold text-center">
                    Nama Obat
                  </td>
                  <td className="px-6 py-3 text-white font-bold text-center">
                    Kategori
                  </td>
                  <td className="px-6 py-3 text-white font-bold text-center">
                    Stok
                  </td>
                  <td className="px-6 py-3 text-white font-bold text-center">
                    Harga Beli
                  </td>
                  <td className="px-6 py-3 text-white font-bold text-center">
                    Harga WNI
                  </td>
                  <td className="px-6 py-3 text-white font-bold text-center">
                    Harga WNA
                  </td>
                  <td className="px-6 py-3 text-white font-bold text-center">
                    Action
                  </td>
                </tr>
              </thead>
              <tbody>
                {content.map((items, index) => (
                  <tr
                    className="bg-white border-b"
                    key={items.id}
                  >
                    <td className=" text-center">
                      {items.med}
                    </td>
                    <td className=" text-center">
                      {items.med_category}
                    </td>
                    <td className=" text-center">
                      {items.stock}
                    </td>
                    <td className=" text-center">
                      {items.harga_beli}
                    </td>
                    <td className=" text-center">
                      {items.harga_wni}
                    </td>
                    <td className=" text-center">
                      {items.harga_wna}
                    </td>
                    <td className="px-6 py-3 flex flex-row">
                      <button
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium bg-indigo-700 m-2 text-white"
                        onClick={() => edit(items.id)}
                      >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                          <FaEdit className="w-5 h-5" />
                        </span>
                        Edit
                      </button>
                      <button
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium bg-red-600 m-2 text-white"
                        onClick={() => edit(items.id)}
                      >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                          <MdOutlineDeleteSweep className="w-5 h-5" />
                        </span>
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Meds;
