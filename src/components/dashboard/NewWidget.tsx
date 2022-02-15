import React from "react";

import { BsFillPlusSquareFill } from "react-icons/bs";

const NewWidget = () => {
  return (
    <div className="bg-purple-500 p-2 rounded-md w-36 h-36">
      <div className="border-dashed border-purple-300 rounded-md border-3 flex items-center justify-center h-full flex-col">
        <BsFillPlusSquareFill />
        <span className="block text-xs">Add A new Widget</span>
      </div>
    </div>
  );
};

export default NewWidget;
