import React from "react";
import { MdPerson, MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";
import SidebarItems from "./SidebarItems";
import {
  FaBookMedical,
  FaClinicMedical,
  FaHandHoldingMedical,
  FaFileMedicalAlt,
  FaNotesMedical,
  FaRegMoneyBillAlt,
} from "react-icons/fa";
import { GiMedicines } from "react-icons/gi";
import { BsFillGearFill } from "react-icons/bs";

const Sidebar = (props) => {
  const className = [props.className];
  if (props.hidden) className.push("hidden");
  return (
    <aside className={props.className}>
      <Link to="/services">
        <div className="flex w-full items-center mt-2 p-2 text-gray-500 hover:bg-gray-200 hover:rounded-md hover:text-indigo-900">
          <span>
            <FaClinicMedical className="w-5 h-5" />
          </span>
          <p className="uppercase px-2 font-poppins font-medium hidden md:block">
            DashBoard
          </p>
        </div>
      </Link>
      <div className="flex w-full items-center mt-2 p-2 text-gray-500 hover:bg-gray-200 hover:rounded-md hover:text-indigo-900">
        <span>
          <FaFileMedicalAlt className="w-5 h-5" />
        </span>
        <p className="uppercase px-2 font-poppins font-medium hidden md:block">
          Pelayanan
        </p>
      </div>
      <Link to="/#">
        <SidebarItems text="Pendaftaran Pasien" />
      </Link>
      <Link to="/#">
        <SidebarItems text="Assesment" />
      </Link>
      <Link to="/#">
        <SidebarItems text="Tindakan" />
      </Link>
      <Link to="/#">
        <SidebarItems text="Pengobatan" />
      </Link>
      <Link to="/#">
        <SidebarItems text="Kasir" />
      </Link>
      <div className="flex w-full items-center mt-2 p-2 text-gray-500 hover:bg-gray-200 hover:rounded-md hover:text-indigo-900">
        <span>
          <FaBookMedical className="w-5 h-5" />
        </span>
        <p className="uppercase px-2 font-poppins font-medium hidden md:block">
          Treatment
        </p>
      </div>
      <Link to="/treatmentcategories">
        <SidebarItems text="Kategori Treatment" />
      </Link>
      <Link to="/treatment">
        <SidebarItems text="Data Treatment" />
      </Link>

      <div className="flex w-full items-center mt-2 p-2 text-gray-500 hover:bg-gray-200 hover:rounded-md hover:text-indigo-900">
        <span>
          <GiMedicines className="w-5 h-5" />
        </span>
        <p className="uppercase px-2 font-poppins font-medium hidden md:block">
          Obat
        </p>
      </div>
      <Link to="/medscategories">
        <SidebarItems text="Data Kategori Obat" />
      </Link>
      <Link to="/meds">
        <SidebarItems text="Data Obat" />
      </Link>

      <div className="flex w-full items-center mt-2 p-2 text-gray-500 hover:bg-gray-200 hover:rounded-md hover:text-indigo-900">
        <span>
          <FaHandHoldingMedical className="w-5 h-5" />
        </span>
        <p className="uppercase px-2 font-poppins font-medium hidden md:block">
          Patients
        </p>
      </div>
      <Link to="/#">
        <SidebarItems text="Riwayat Pasien" />
      </Link>
      <div className="flex w-full items-center mt-2 p-2 text-gray-500 hover:bg-gray-200 hover:rounded-md hover:text-indigo-900">
        <span>
          <FaRegMoneyBillAlt className="w-5 h-5" />
        </span>
        <p className="uppercase px-2 font-poppins font-medium hidden md:block">
          Keuangan
        </p>
      </div>
      <Link to="/#">
        <SidebarItems text="Catat Pengeluaran" />
      </Link>
      <div className="flex w-full items-center mt-2 p-2 text-gray-500 hover:bg-gray-200 hover:rounded-md hover:text-indigo-900">
        <span>
          <FaNotesMedical className="w-5 h-5" />
        </span>
        <p className="uppercase px-2 font-poppins font-medium hidden md:block">
          Laporan
        </p>
      </div>
      <Link to="/#">
        <SidebarItems text="Treatment" />
      </Link>
      <Link to="/#">
        <SidebarItems text="Penjualan Obat" />
      </Link>
      <Link to="/#">
        <SidebarItems text="Stok Obat" />
      </Link>
      <div className="flex w-full items-center mt-2 p-2 text-gray-500 hover:bg-gray-200 hover:rounded-md hover:text-indigo-900">
        <span>
          <BsFillGearFill className="w-5 h-5" />
        </span>
        <p className="uppercase px-2 font-poppins font-medium hidden md:block">
          Setting
        </p>
      </div>
      <Link to="/locations">
        <SidebarItems text="Lokasi Klinik" />
      </Link>
    </aside>
  );
};

export default Sidebar;
