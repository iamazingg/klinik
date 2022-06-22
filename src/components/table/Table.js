import React from "react";
import TableRow from "./TableRow";

const Table = (props) => {
  const headerRender = props.header.map((data) => (
    <td key={data.id} className="px-6 py-3">
      {data.text}
    </td>
  ));
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 table-auto">
      <thead className="text-xs text-gray-700 uppercase bg-gray-500">
        <tr>
          {headerRender}
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        {props.data.map((items, index) => (
          <TableRow
            data={items}
            header={props.header}
            key={index}
            isEditable
            isEditableOnCLick={props.isEditableOnCLick}
            isDeleteable={props.isDeleteable}
            isDeleteableOnClick={props.isDeleteableOnClick}
            isCustom={props.isCustom}
            isCustomText={props.isCustomText}
            isCustomOnClick={props.isCustomOnClick}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
