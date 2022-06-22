import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
      <div className="flex items-center">
        <span className="text-3xl mr-4">Loading</span>
        <FaSpinner className="animate-spin" />
      </div>
    </div>
  );
};

export default Loading;
