import React from "react";
import DataTable from "react-data-table-component";
import { data } from "../data";

function TableInfo() {
  const columns = [
    {
      name: "First Name",
      selector: (row) => row.first_name,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.last_name,
    },
    {
      name: "Full Name",
      selector: (row) => row.first_name + " " + row.last_name,
    },
    {
      name: "Age",
      selector: "",
    },
  ];
  const conditionalRowStyles = [
    {
      when: (row) => row.status === true,
      style: {
        backgroundColor: "green",
        color: "white",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    {
      when: (row) => row.status === false,
      style: {
        backgroundColor: "red",
        color: "white",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
  ];

  return (
    <div>
      <DataTable
        columns={columns}
        data={data}
        pagination
        fixedHeader
        fixedHeaderScrollHeight="450px"
        highlightOnHover
        conditionalRowStyles={conditionalRowStyles}
      />
    </div>
  );
}

export default TableInfo;
