import React from "react";
import Table from "../components/table/Table";

const Dashboard = () => {
  const header = [
    { id: 1, text: "First Name", value: "first_name" },
    { id: 2, text: "Last Name", value: "last_name" },
  ];
  const Datapatients = [
    { id: 1, first_name: "Test", last_name: "last name" },
    { id: 2, first_name: "Test2", last_name: "last name2" },
  ];
  return <Table header={header} data={Datapatients} />;
};

export default Dashboard;
