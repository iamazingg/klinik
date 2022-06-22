import React from "react";

const SidebarItems = (props) => {
  return (
    <div className="flex w-full items-center mt-1 p-1 text-gray-500 hover:bg-gray-200 hover:rounded-md hover:text-indigo-900">
      <p className="px-2 font-poppins text-sm font-normal hidden md:block">
        {props.text}
      </p>
    </div>
  );
};

export default SidebarItems;
