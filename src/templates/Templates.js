import React from "react";
import { HiMenu } from "react-icons/hi";
import Sidebar from "../components/sidebars/Sidebar";
import { Navigate, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Services from "../pages/Services/Services";
import FormService from "../pages/Services/FormService";
import ServiceCategories from "../pages/ServiceCategories/ServiceCategories";
import MedsCategories from "../pages/MedsCategories/MedsCategories";
import Locations from "../pages/Locations/Locations";
import Meds from "../pages/Meds/Meds";

export const Templates = () => {
  const IsActive = true;
  return (
    <div className="min-h-screen">
      <div className="w-full bg-indigo-500 px-5 py-5 flex">
        <div className="flex-auto">
          <button>
            <HiMenu className="text-white w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="w-full flex">
        {IsActive ? (
          <Sidebar className="min-h-screen w-2/12 border-r-2 md:px-3 md:w-64 space-y-2" />
        ) : (
          <></>
        )}
        <div className="min-h-screen w-full border-r-2 px-3 py-5 space-y-7 bg-gray-200">
          <Routes>
            <Route
              path="/meds"
              element={<Meds />}
              exact="true"
            />
            <Route
              path="/locations"
              element={<Locations />}
              exact="true"
            />
            <Route
              path="/medscategories"
              element={<MedsCategories />}
              exact="true"
            />
            <Route
              path="/treatmentcategories"
              element={<ServiceCategories />}
              exact="true"
            />
            <Route
              path="/treatment"
              element={<Services />}
              exact="true"
            />
            <Route
              path="/formtreatment"
              element={<FormService />}
              exact="true"
            />
            <Route
              path="/detail-riwayat-pasien"
              element={<Dashboard />}
              exact="true"
            />
            <Route
              path="/riwayat-pasien"
              element={<Dashboard />}
              exact="true"
            />
            <Route
              path="/tambah-pasien"
              element={<Dashboard />}
              exact="true"
            />
            <Route
              path="/registrasi-pasien"
              element={<Dashboard />}
              exact="true"
            />
            <Route
              path="/dashboard"
              element={<Dashboard />}
              exact="true"
            />
            <Route
              path="/"
              element={<Dashboard />}
              exact="true"
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};
