import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../api/ServiceApi";
import Loading from "../../components/loading/Loading";
import Table from "../../components/table/Table";
import ServiceSlice from "../../store/slice/ServiceSlice";
import FormService from "./FormService";

const Services = () => {
  let [search, setSearch] = useState("");
  const status = useSelector(
    (state) => state.services.status
  );
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  let services = useSelector(
    (state) => state.services.services
  );

  const onSearchHandler = (event) => {
    setSearch(event.target.value);
    console.log(search);
  };

  useEffect(() => {
    console.log("effect");
    dispatch(ServiceSlice.actions.StartFetchingData());
    getServices(token)
      .then((res) => {
        console.log(res);
        dispatch(
          ServiceSlice.actions.SuccessFetchingData()
        );
        dispatch(
          ServiceSlice.actions.SetService(res.data.services)
        );
      })
      .catch((error) => {
        dispatch(ServiceSlice.actions.errorFetchingData());
      });
  }, [dispatch]);

  const header = [
    { id: 1, text: "Treatment", value: "service" },
    {
      id: 2,
      text: "Treatment category",
      value: "service_category",
    },
    {
      id: 3,
      text: "Harga WNI",
      value: "harga_wni",
    },
    {
      id: 4,
      text: "Harga WNA",
      value: "harga_wna",
    },
  ];
  let content = services.filter((service) => {
    return (
      service.service
        .toLowerCase()
        .indexOf(search.toLowerCase()) !== -1
    );
  });
  console.log(content);
  return (
    <div>
      {status === "process" ? (
        <Loading />
      ) : (
        <div>
          <div className="mt-3 px-6 py-6 rounded bg-white">
            <h2 className="font-poppins text-xl font-medium ">
              Tambah data Treatment
            </h2>

            <FormService />
          </div>
          <div className="mt-3 py-6 px-6 rounded bg-white">
            <div className="flex my-4">
              <h2 className="font-poppins text-xl font-medium mb-4 flex-auto w-3/4">
                Data Treatment
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

export default Services;
