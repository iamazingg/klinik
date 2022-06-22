import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdOutlineDeleteSweep } from "react-icons/md";

const TableRow = (props) => (
  <tr className="bg-white border-b ">
    {props.header.map((columnItem, index) => {
      if (columnItem.value.includes(".")) {
        let field = columnItem.value.split(".");
        return (
          <td key={index} className="px-6 py-3">
            {props.data[field[0]][field[1]]}
          </td>
        );
      }
      return (
        <td key={index} className="px-6 py-3">
          {props.data[`${columnItem.value}`]}
        </td>
      );
    })}
    <td className="px-6 py-3 flex flex-row">
      {props.isEditable ? (
        <button
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium"
          onClick={props.isEditableOnCLick}
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <FaEdit className="w-5 h-5" />
          </span>
          Edit
        </button>
      ) : (
        <></>
      )}
      {props.isDeleteable ? (
        <button
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium"
          onClick={props.isDeleteableOnClick}
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <MdOutlineDeleteSweep className="w-5 h-5" />
          </span>
          Delete
        </button>
      ) : (
        <></>
      )}
      {props.isCustom ? (
        <button
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium"
          onClick={props.isCustomOnClick}
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <MdOutlineDeleteSweep className="w-5 h-5" />
          </span>
          {props.isCustomText}
        </button>
      ) : (
        <></>
      )}
    </td>
  </tr>
);

export default TableRow;
