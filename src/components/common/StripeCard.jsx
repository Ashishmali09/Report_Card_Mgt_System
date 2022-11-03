import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const StripeCard = () => {
  return (
    <div className="flex items-center justify-between ">
      <div className="w-[80%] bg-gray-100 p-3 rounded-lg h-14">
        <label htmlFor="standardinput" className="flex mx-1 items-center">
          Standard
          <span className="text-gray-700 ml-5">IV</span>
        </label>
      </div>
      <div className="h-14 px-3 my-2 text-xs w-[18%] rounded-lg bg-gray-100 text-white flex items-center justify-evenly">
        <FiEdit
          size={15}
          className="text-primary h-10 w-10 p-[10px] cursor-pointer rounded-full bg-gray-50"
        />
        <FiTrash2
          size={15}
          className="text-primary h-10 w-10 p-[10px] cursor-pointer rounded-full bg-gray-50"
        />
      </div>
    </div>
  );
};

export default StripeCard;
